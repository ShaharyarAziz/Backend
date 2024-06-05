import mongoose, { mongo } from "mongoose";

const sub_todo_Schema = new mongoose.Schema(
  {
    content: {
      required: true,
      type: String,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const subTodo = mongoose.model("SubTodo", sub_todo_Schema);
