//Import all dependencies and Middleware
import express from "express";

//Init Express App
const app = express();

//Dependencies used

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
