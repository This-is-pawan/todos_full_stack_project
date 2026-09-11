import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/app/api/lib/db";
import { VerifyToken } from "@/app/api/lib/jwt";
import UserCreateModel from "@/app/api/models/creatModel";

export const PATCH = async (
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

    // Get data from request body
    const body = await req.json();

    // Update only allowed fields
    const updatedTodo = await UserCreateModel.findOneAndUpdate(
      {
        _id: id,
        userId: decoded.id,
      },
      {
        todolist: body.todolist,
        description: body.description,
        category: body.category,
        prioity: body.prioity,
        due_date: body.due_date,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // Todo not found
    if (!updatedTodo) {
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
        message: "Todo updated successfully",
        todo: updatedTodo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Todo Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while updating todo",
      },
      { status: 500 }
    );
  }
};