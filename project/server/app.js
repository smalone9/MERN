//Import all dependencies and Middleware
import express from "express";
import bodyParser from "body-parser";
import { userController } from "./controller";
import mongoose from "mongoose";

//Init Express App
const app = express();

//Dependencies used
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Controllers (APIs) used
app.use("/", userController);

//Start Server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
  mongoose.connect("mongodb://localhost/test").then(() => {
    console.log(`Connected to mongoDB at port 27017`);
  });
});
