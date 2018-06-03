package com.rmbcorp.vnserver.servlet;

import org.eclipse.jetty.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

class LightStackException extends Exception {

    private ExceptionType exceptionType;
    private Object clientMessage;
    List<String[]> serverMessageKV = new ArrayList<>();

    LightStackException(ExceptionType exceptionType, Object clientMessage) {
        this.exceptionType = exceptionType;
        this.clientMessage = clientMessage;
    }

    LightStackException(ExceptionType exceptionType, Object clientMessage, List<String[]> serverMessages) {
        this(exceptionType, clientMessage);
        serverMessageKV.addAll(serverMessages);
    }

    LightStackException(ExceptionType exceptionType, Exception e, Object clientMessage) {
        super(e);
        this.exceptionType = exceptionType;
        this.clientMessage = clientMessage;
    }

    @Override
    public Throwable fillInStackTrace() {
        return this;
    }

    ExceptionType getExceptionType() {
        return exceptionType;
    }

//    ApiResponse<Object> getResponse() {
//        return exceptionType.getResponse(clientMessage).toError();
//    }

    enum ExceptionType {
        NO_ENDPOINT(HttpStatus.NOT_FOUND_404),
        DESERIALIZE(HttpStatus.BAD_REQUEST_400),
        UNAUTHORIZED(HttpStatus.UNAUTHORIZED_401),
        NO_ACCESS(HttpStatus.FORBIDDEN_403),
        SERVER_ERR(HttpStatus.INTERNAL_SERVER_ERROR_500);

        private int httpStatus;

        ExceptionType(int httpStatus) {
            this.httpStatus = httpStatus;
        }

//        ApiResponse<Object> getResponse(Object clientMessage) {
//            return new ApiResponse<>(httpStatus, clientMessage);
//        }
    }
}
