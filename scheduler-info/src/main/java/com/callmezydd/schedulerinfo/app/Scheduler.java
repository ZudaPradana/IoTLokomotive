package com.callmezydd.schedulerinfo.app;

import com.callmezydd.schedulerinfo.model.Locomotif;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;
import java.util.UUID;

@Component
public class Scheduler {

    private final KafkaProducer kafkaProducer;

    @Autowired
    public Scheduler(KafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @Scheduled(fixedDelay = 10000)
    public void scheduler() {
        String[] status = { "Poor", "Good", "Excellent" };
        String[] locoName = {"B2502", "B2503", "B5112", "C1218", "D1410", "E1060", "D52099"};
        String[] locoDimension = {"6","7","8","9"};
        Random random = new Random();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        String formattedTime = LocalDateTime.now().format(formatter);

        Locomotif locomotif = Locomotif.builder()
                .locoCode(UUID.randomUUID().toString().substring(0, 13))
                .locoName(locoName[random.nextInt(locoName.length)])
                .locoDimension(locoDimension[random.nextInt(locoDimension.length)] + "x" + locoDimension[random.nextInt(locoDimension.length)])
                .status(status[random.nextInt(status.length)])
                .time(formattedTime)
                .build();

        // Mengirim objek Locomotif ke Kafka topic
        kafkaProducer.sendMessage("LocoDummy", locomotif);

        System.out.println(locomotif);
    }
}
