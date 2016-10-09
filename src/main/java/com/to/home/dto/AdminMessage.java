package com.to.home.dto;

import java.util.Date;

public class AdminMessage {

    private String message;
    private Date date = new Date();

    public AdminMessage() {
    }

    public AdminMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}