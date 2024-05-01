import mongoose from "mongoose";

const FormSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    maxlength: [30, "Name must not exceed 30 characters"],
  },
  Email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

export const FormModel = mongoose.model("Messages", FormSchema);
