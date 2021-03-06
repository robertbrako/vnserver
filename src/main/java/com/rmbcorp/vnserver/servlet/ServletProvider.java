package com.rmbcorp.vnserver.servlet;

import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;

import javax.servlet.DispatcherType;
import javax.servlet.http.HttpServlet;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.AbstractMap;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;

public class ServletProvider {

    private ParamUtil paramUtil;
    private ServletContextHandler handler;

    public ServletProvider(ParamUtil paramUtil) {
        this.paramUtil = paramUtil;
    }

    public ServletContextHandler createContextHandler() throws URISyntaxException {
        handler = new ServletContextHandler();
        ServletHolder staticHolder = new ServletHolder("default", new DefaultServlet());
        staticHolder.setInitParameters(immMap());
        handler.addServlet(staticHolder, "/");
        handler.addFilter(MyFilter.class, "/*", EnumSet.of(DispatcherType.INCLUDE, DispatcherType.REQUEST));

        addServlet(new LambdaServlet("Server running; health ok."), "/health/*");
        return handler;
    }

    private void addServlet(InjectableServlet<ParamUtil> servlet, String pathSpec) {
        handler.addServlet(new ServletHolder(servlet.with(paramUtil)), pathSpec);
    }

    private static Map<String, String> immMap() throws URISyntaxException {
        URL publicResource = ServletProvider.class.getClassLoader().getResource("public");
        URI resource = publicResource == null ? URI.create("public") : publicResource.toURI().normalize();
        return newMap(
                entry("aliases", "true"),
                entry("acceptRanges", "true"),
                entry("dirAllowed", "false"),
                entry("welcomeServlets", "false"),
                entry("redirectWelcome", "false"),
                entry("maxCacheSize", "256000000"),
                entry("maxCachedFileSize", "10000000"),
                entry("cacheType", "nio"),
                entry("resourceBase", resource.toString()),
                entry("gzip", "true"),
                entry("useFileMappedBuffer", "true"),
                entry("cacheControl", "private, max-age=31536000")
        );
    }

    @SafeVarargs
    static <K,V> Map<K,V> newMap(Map.Entry<K, V>... entries) {
        HashMap<K, V> map = new HashMap<>();
        for (Map.Entry<K, V> entry : entries) {
            map.put(entry.getKey(), entry.getValue());
        }
        return map;
    }

    static <K,V> Map.Entry<K,V> entry(K key, V value) {
        return new AbstractMap.SimpleEntry<>(key, value);
    }

    interface InjectableServlet<T> {
        HttpServlet with(T injectable);
    }
}
