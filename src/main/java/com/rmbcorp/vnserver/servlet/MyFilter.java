package com.rmbcorp.vnserver.servlet;

import org.eclipse.jetty.server.Request;

import javax.servlet.*;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class MyFilter implements Filter {

    private static final List<String> ALLOWED_ROUTES = Arrays.asList("", "about", "tech");
    private FilterConfig filterConfig;

    public MyFilter() {
        //not sure about constructor
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        this.filterConfig = filterConfig;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        Request request = (Request) servletRequest;
        String servletPath = request.getServletPath();
        if (ALLOWED_ROUTES.contains(request.getServletPath().replaceFirst("/", ""))) {
            request.setServletPath("/");
            request.setContextPath(servletPath);
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {
        this.filterConfig = null;
    }
}
