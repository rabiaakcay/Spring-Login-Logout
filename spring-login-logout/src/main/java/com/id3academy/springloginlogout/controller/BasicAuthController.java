package com.id3academy.springloginlogout.controller;

import com.id3academy.springloginlogout.bean.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class BasicAuthController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloID3Bean() {
        return new AuthenticationBean("You are authenticated");
    }
}

