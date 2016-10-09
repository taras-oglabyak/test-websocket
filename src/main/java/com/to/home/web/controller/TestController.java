package com.to.home.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

    @GetMapping("echo")
    @ResponseBody
    public String echo(@RequestParam String user) {
        return "Hello, " + user;
    }
}