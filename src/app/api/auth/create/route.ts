import { NextRequest, NextResponse } from "next/server";

import UserCreateModel from "../../models/creatModel";
import { create_validation } from "../../middleware/validation";
import { VerifyToken } from "../../lib/jwt";

export const POST = async (req: NextRequest) => {
  try {
    // 1. Get request body
    const body = await req.json();

    // 2. Validate body
    const validated = create_validation.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: validated.error.flatten(),
        },
        { status: 400 }
      );
    }

    // 3. Get validated data
    const {
      todolist,
      description,
      category,
      prioity,
      due_date,
    } = validated.data;

    // 4. Get token from cookie
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized. Token not found",
        },
        { status: 401 }
      );
    }

    // 5. Verify token
    const user = VerifyToken(token);

    if (
      !user ||
      typeof user === "string" ||
      !("id" in user)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired token",
        },
        { status: 401 }
      );
    }

    // 6. Create todo
    const newTodo = await UserCreateModel.create({
      userId: user.id,
      todolist,
      description,
      category,
      prioity,
      due_date,
    });

    // 7. Return response
    return NextResponse.json(
      {
        success: true,
        message: "Todo created successfully",
        todo: newTodo,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Todo Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
};