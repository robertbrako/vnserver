package com.rmbcorp.vnserver;

import com.rmbcorp.vnserver.servlet.ParamUtil;
import com.rmbcorp.vnserver.servlet.ServletProvider;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

public class AppMain {

    private static final Map<String, String> defaultEnv = getDefaultEnv();

    private static HashMap<String, String> getDefaultEnv() {
        HashMap<String, String> map = new HashMap<>();
        map.put("HOST", "0.0.0.0");
        map.put("PORT", "8080");
        map.put("IDLE_TIMEOUT", "30000");
        return map;
    }

    public static void main(String[] args) {
        Server server = new Server();
        ServerConnector http = new ServerConnector(server);
        http.setHost(getProperty("HOST"));
        http.setPort(getIntProperty("PORT"));
        http.setIdleTimeout(getIntProperty("IDLE_TIMEOUT"));
        server.addConnector(http);
        ServletProvider servletProvider = new ServletProvider(ParamUtil.instance());
        try {
            server.setHandler(servletProvider.createContextHandler());
            server.start();
            server.join();
        } catch (Exception e) {
            Logger.getGlobal().log(Level.SEVERE, e.getLocalizedMessage(), e);
        }
    }

    private static String getProperty(String key) {
        return System.getenv().getOrDefault(key, defaultEnv.get(key));
    }

    private static int getIntProperty(String key) {
        return Integer.parseInt(getProperty(key));
    }
}
