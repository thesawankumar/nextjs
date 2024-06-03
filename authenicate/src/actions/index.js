"use server";

import connectToDB from "@/database/db";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function registerUserAction(formData) {
  await connectToDB();
  try {
    const { userName, email, password } = formData;
    const checkUser = await User.findOne({ email });
    // console.log(checkUser);
    if (checkUser) {
      return {
        success: false,
        message: "User Already Exists! Please try again with different one",
      };
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(savedUser)),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Something error occured in register user",
      success: false,
    };
  }
}

export async function loginUserAction(formData) {
  await connectToDB();
  try {
    const { email, password } = formData;
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return {
        success: false,
        message: "User doesnot exist ! please sign up",
      };
    }

    const checkPassword = await bcryptjs.compare(password, checkUser.password);
    if (!checkPassword) {
      return {
        message: "Password is incorrect please check",
        success: false,
      };
    }
    const createdTokenData = {
      id: checkUser._id,
      userName: checkUser.userName,
      email: checkUser.email,
    };

    const token = jwt.sign(createdTokenData, "DEFAULT_KEY", {
      expiresIn: "1d",
    });
    const getCookies = cookies();
    getCookies.set("token", token);
    return {
      success: true,
      message: "Login is successfull",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
}

export async function fetchAuthUserAction() {
  await connectToDB();
  try {
    const getCookies = cookies();
    const token = getCookies.get("token")?.value || "";
    if (token === "") {
      return {
        success: false,
        message: "Please login first",
      };
    }
    const decodedToken = jwt.verify(token, "DEFAULT_KEY");
    const getUserInfo = await User.findOne({ _id: decodedToken.id });
    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: "Some error occured ! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
}
export async function logoutAction() {
  const getCookies = cookies();
  getCookies.set("token", "");
}
