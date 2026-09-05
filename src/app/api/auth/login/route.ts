import { NextRequest, NextResponse } from "next/server";
import { login_validation } from "./../../middleware/validation";
import { GenerateToken } from "./../../lib/jwt";
import { Hashcompare } from "./../../lib/bcryptjs";

import { connectDB } from "../../lib/db";
import User from "../../models/userModel";

export const POST = async (req: NextRequest) => {
  try {
    // Connect database
    await connectDB();

    // Get request body
    const data = await req.json();

    // Validate data
    const validated = login_validation.safeParse(data);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: validated.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { email, password } = validated.data;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    // Compare password
    const isPasswordValid = await Hashcompare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    // Generate token
    const token = GenerateToken({
      id: user._id.toString(),
    });

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Token generation failed",
        },
        { status: 500 },
      );
    }

    // Create response
    const result = NextResponse.json(
      {
        success: true,
        message: "Login successful",
      },
      { status: 200 },
    );

    // Store token in cookie
    result.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return result;
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
};
