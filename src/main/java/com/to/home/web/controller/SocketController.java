package com.to.home.web.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.to.home.dto.AdminMessage;
import com.to.home.dto.UserMessage;

@Controller
public class SocketController {

    @MessageMapping("/sendMessage")
    @SendTo("/queue")
    public AdminMessage receiveFromUserAndSendToAdmin(UserMessage userMessage) {
        return new AdminMessage(userMessage.getMessage());
    }
}