package com.rmbcorp.vnserver.servlet;

import org.eclipse.jetty.http.MimeTypes;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

import static com.rmbcorp.vnserver.servlet.ServletProvider.*;

public class LambdaServlet extends HttpServlet implements ServletProvider.InjectableServlet<ParamUtil> {
    private Map<String, String> apiMap;
    private ParamUtil paramUtil;

    LambdaServlet(String responseText) {
        apiMap = newMap(entry("data", responseText));
    }

    @Override
    public HttpServlet with(ParamUtil paramUtil) {
        this.paramUtil = paramUtil;
        return this;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String pathInfo = req.getPathInfo();
        String pathEnd = pathInfo == null ? "" : pathInfo.replaceFirst("/", "");
        resp.setHeader("Content-type", MimeTypes.Type.TEXT_PLAIN_UTF_8.asString());
        resp.setStatus(200);
        paramUtil.writeResponse(resp.getOutputStream(), apiMap);
    }
}
