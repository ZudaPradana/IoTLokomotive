const { Kafka } = require("kafkajs");
const { saveToMongo } = require("./mongo_service");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "my-group", topic: "LocoDummy" });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "LocoDummy", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const dataFromKafka = message.value.toString();
        console.log("Received data from Kafka:", dataFromKafka);

        // Simpan data ke MongoDB
        await saveToMongo(dataFromKafka);
      } catch (error) {
        console.error("Error processing Kafka message:", error);
      }
    },
  });
};

module.exports = { runConsumer };
