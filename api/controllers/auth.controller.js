import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

//if there is await in the function, it should be async
export const signup = async (req, res, next) => {
  // Destructure the request body
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });

  // Save the user to the database
  //this take few times to save
  //so that we use async and await to prevent error
  //then it will wait until the user is saved and go to the next line
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (err) {
    next(err);
  }
};
