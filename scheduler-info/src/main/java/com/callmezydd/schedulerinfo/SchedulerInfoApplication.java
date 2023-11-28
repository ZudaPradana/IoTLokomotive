package com.callmezydd.schedulerinfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication(scanBasePackages = { "com.callmezydd.schedulerinfo.app", "com.callmezydd.schedulerinfo.config"})
public class SchedulerInfoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SchedulerInfoApplication.class, args);
    }
}
