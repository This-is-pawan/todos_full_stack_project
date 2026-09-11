import { Schema, model, models, Document, Types } from "mongoose";

export interface CreateUser extends Document {
  userId: Types.ObjectId;
  todolist: string;
  description: string;
  category: string;
  prioity: string;
  due_date: Date;
}

const UserCreateTodo = new Schema<CreateUser>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    todolist: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    prioity: {
      type: String,
      required: true,
    },

    due_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserCreateModel =
  models.create_todo ||
  model<CreateUser>("create_todo", UserCreateTodo);

export default UserCreateModel;