
import { NextRequest, NextResponse } from "next/server";

import { register_validation } from "../../middleware/validation";
import User from "../../models/userModel";
import { connectDB } from "../../lib/db";
import { Hash } from "../../lib/bcryptjs";
import { GenerateToken } from "../../lib/jwt";

export const POST = async (req: NextRequest) => {
  try {
    // Connect to database
    await connectDB();

    // Get request body
    const data = await req.json();

    // Validate request data
    const validated = register_validation.safeParse(data);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: validated.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, password } = validated.data;

    // Check if user already exists
    const exist = await User.findOne({ email });

    if (exist) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 }
      );
    }

    // Hash password
    const hashPassword = await Hash(password);

    // Create user
    const createUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    // Generate JWT token
    const token = GenerateToken({
      id: createUser._id.toString(),
    });

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Token generation failed",
        },
        { status: 500 }
      );
    }

    // Create response
    const result = NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
      },
      { status: 201 }
    );

    // Set token in HTTP-only cookie
    result.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return result;
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
};

