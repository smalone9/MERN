//Import all dependencies and Middleware
import express from "express";
import bodyParser from "body-parser";

//Init Express App
const app = express();

//Dependencies used
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Controllers (APIs) used
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Server run successfully",
  });
});

//Start Server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
