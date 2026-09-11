import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/app/api/lib/db"; 
import { VerifyToken } from "@/app/api/lib/jwt";  
import UserCreateModel from "@/app/api/models/creatModel"; 

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    // Connect MongoDB
    await connectDB();

    // Get Todo ID from URL
    const { id } = await params;

    // Check ID
    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo ID is required",
        },
        { status: 400 }
      );
    }

    // Get token from cookie
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Authentication token not found",
        },
        { status: 401 }
      );
    }

    // Verify JWT
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

    // Delete only the Todo that belongs to logged-in user
    const deletedTodo = await UserCreateModel.findOneAndDelete({
      _id: id,
      userId: decoded.id,
    });

    // Todo not found
    if (!deletedTodo) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo not found or you are not authorized",
        },
        { status: 404 }
      );
    }

    // Success
    return NextResponse.json(
      {
        success: true,
        message: "Todo deleted successfully",
        todo: deletedTodo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Todo Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while deleting todo",
      },
      { status: 500 }
    );
  }
};