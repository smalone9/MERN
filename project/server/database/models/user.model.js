import mongoose from "mongoose";
import userSchema from "../schemas.user.schemas";

const User = mongoose.model("User", userSchema);

export default User;
