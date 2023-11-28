const express = require("express");
const bodyParser = require("body-parser");
const { runConsumer } = require("./service/kafka_service");
const { connectToMongo, saveToMongo } = require("./service/mongo_service");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const init = async () => {
  await connectToMongo();
  await runConsumer();
};

init().catch(console.error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
