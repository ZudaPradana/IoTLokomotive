const mongoose = require("mongoose");
const { Locomotif } = require("../model/loco_model");

const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/loco_train");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const saveToMongo = async (dataFromKafka) => {
  try {
    // Gunakan data langsung tanpa melakukan JSON.parse
    console.log("Received data from Kafka:", dataFromKafka);

    // Pastikan dataFromKafka adalah objek JavaScript
    const locoData =
      typeof dataFromKafka === "string"
        ? JSON.parse(dataFromKafka)
        : dataFromKafka;

    // Simpan data ke MongoDB
    const instance = new Locomotif(locoData);
    console.log("About to save to MongoDB:", instance);

    const savedData = await instance.save();
    console.log("Data saved to MongoDB:", savedData);
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
  }
};

module.exports = { connectToMongo, saveToMongo };
