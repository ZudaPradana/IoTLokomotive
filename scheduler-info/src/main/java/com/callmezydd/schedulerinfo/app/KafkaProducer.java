package com.callmezydd.schedulerinfo.app;

import com.callmezydd.schedulerinfo.model.Locomotif;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class KafkaProducer {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final ObjectMapper objectMapper;

    @Autowired
    public KafkaProducer(KafkaTemplate<String, String> kafkaTemplate, ObjectMapper objectMapper) {
        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = objectMapper;
    }

    public void sendMessage(String topic, Locomotif locomotif) {
        try {
            // Mengonversi objek menjadi string JSON
            String jsonString = objectMapper.writeValueAsString(locomotif);
            kafkaTemplate.send(topic, jsonString);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            // Handle exception jika gagal mengonversi objek menjadi JSON
        }
    }
}
