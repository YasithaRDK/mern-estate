import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  try {
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};
