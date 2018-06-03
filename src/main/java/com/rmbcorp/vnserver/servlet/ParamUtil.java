package com.rmbcorp.vnserver.servlet;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.fasterxml.jackson.databind.exc.MismatchedInputException;
import com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import javax.servlet.ServletOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static com.rmbcorp.vnserver.servlet.LightStackException.ExceptionType;


public class ParamUtil {

    private static final String EXCEPTION_MESSAGE = "Could not deserialize the supplied POST";
    private static final JsonFactory JSON_FACTORY = new JsonFactory();
    private final ObjectMapper mapper = setupJSONMapper();
    private static ParamUtil paramUtil;

    private ParamUtil() {}

    public static ParamUtil instance() {
        return paramUtil == null ? (paramUtil = new ParamUtil()) : paramUtil;
    }

    private static ObjectMapper setupJSONMapper() {
        ObjectMapper mapper;
        SimpleModule recordModule = new SimpleModule("recordModule");
        mapper = new ObjectMapper(JSON_FACTORY)
                .registerModule(new JavaTimeModule())
                .registerModule(recordModule)
                .disable(DeserializationFeature.ADJUST_DATES_TO_CONTEXT_TIME_ZONE)
        ; // trailing ; is intentional
        return mapper;
    }

    <T> T read(InputStream inputStream, Class<T> paramType) throws LightStackException {
        try {
            T result = mapper.readValue(inputStream, paramType);
            if (result == null) throw new IOException("Failed to deserialize with unknown cause");
            return result;
        } catch (UnrecognizedPropertyException e) {
            UnrecognizedPropertyBean bean = new UnrecognizedPropertyBean(EXCEPTION_MESSAGE, e);
            throw new LightStackException(ExceptionType.DESERIALIZE, bean, bean.serverMessages);
        } catch (InvalidFormatException e) {
            InvalidFormatBean bean = new InvalidFormatBean(EXCEPTION_MESSAGE, e);
            throw new LightStackException(ExceptionType.DESERIALIZE, bean, bean.serverMessages);
        } catch (MismatchedInputException e) {
            String clientMessage = e.getLocalizedMessage().replaceFirst("\n.*", " for " + trimForClient(e.getPathReference()));
            throw new LightStackException(ExceptionType.DESERIALIZE, clientMessage, Collections.singletonList(new String[]{"cause", e.getClass().getName()}));
        } catch (JsonProcessingException e) {
            throw new LightStackException(ExceptionType.DESERIALIZE, e, e.getMessage());
        } catch (Exception e) {
            throw new LightStackException(ExceptionType.DESERIALIZE, e, EXCEPTION_MESSAGE + ": " + e.getClass().getSimpleName());
        }
    }

    void writeResponse(ServletOutputStream outputStream, Object object) throws IOException {
        mapper.writerWithDefaultPrettyPrinter().writeValue(outputStream, object);
    }

    public String toJSONString(Object value) throws JsonProcessingException {
        return mapper.writeValueAsString(value);
    }

    @SuppressWarnings("unchecked")
    public <T> T fromJSONString(String input, T defaultValue) throws IOException {
        T result = mapper.readValue(input, (Class<T>) defaultValue.getClass());
        return result == null ? defaultValue : result;
    }

    private static String trim(String name) {
        String firstUpper = name.startsWith("get") ? name.replaceFirst("get", "") : name.replaceFirst("is", "");
        char[] chars = firstUpper.toCharArray();
        chars[0] = Character.toLowerCase(chars[0]);
        return String.valueOf(chars);
    }

    private static String trimForClient(String input) {
        return input.replaceAll("\\w+\\.", "").replaceAll("\"", "");
    }

    class UnrecognizedPropertyBean {
        public String clientMessage;
        public String propertyName;
        public String referringClass;
        public List<String> acceptableProps;
        private List<String[]> serverMessages;

        UnrecognizedPropertyBean(String clientMessage, UnrecognizedPropertyException e) {
            this.clientMessage = clientMessage;
            propertyName = e.getPropertyName();
            referringClass = e.getReferringClass() == null ? "" : e.getReferringClass().getSimpleName();
            acceptableProps = e.getKnownPropertyIds().stream().map(String::valueOf).collect(Collectors.toList());
            serverMessages = Arrays.asList(new String[]{"propertyName", propertyName},
                    new String[]{"referringClass", e.getReferringClass().getName()}
            );
        }
    }

    class InvalidFormatBean {
        public String clientMessage;
        public String targetType;
        public String value;
        public String pathReference;
        private List<String[]> serverMessages;

        InvalidFormatBean(String clientMessage, InvalidFormatException e) {
            this.clientMessage = clientMessage;
            pathReference = trimForClient(e.getPathReference());
            value = String.valueOf(e.getValue());
            targetType =  e.getTargetType().getSimpleName();
            serverMessages = Arrays.asList(new String[]{ "pathReference", e.getPathReference()},
                    new String[]{ "value", String.valueOf(e.getValue())},
                    new String[]{ "targetType", e.getTargetType().getName()}
            );
        }
    }

}
