import { NextRequest, NextResponse } from "next/server";
import { VerifyToken } from "../../lib/jwt";
import User from "../../models/userModel";
import { connectDB } from "../../lib/db";
import UserCreateModel from "../../models/creatModel";

export const GET = async (req: NextRequest) => {
  try {
    // Connect database
    await connectDB();

    // Get token from cookie
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Token not found",
        },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = VerifyToken(token);

    if (
      !decoded ||
      typeof decoded !== "object" ||
      !("id" in decoded)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token",
        },
        { status: 401 }
      );
    }

    // Find authenticated user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    // Find all todos created by authenticated user
    const todos = await UserCreateModel.find({
       userId: decoded.id,
    }).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        user,
        todos,
        count: todos.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get todos error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid or expired token",
      },
      { status: 401 }
    );
  }
};