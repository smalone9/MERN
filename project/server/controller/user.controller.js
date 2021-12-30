import express from "express";

const userController = express.Router();

userController.get("/", (re, res) => {
  res.status(200).json({
    status: "user Controller API called successfully",
  });
});

export default userController;
