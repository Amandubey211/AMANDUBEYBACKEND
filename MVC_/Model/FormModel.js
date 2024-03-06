import mongoose from "mongoose";
import * as EmailValidator from "email-validator";

const FormSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    maxlength: [30],
  },
  Email: {
    type: String,
    // unique: true,
    required: true,
    validate: [
      function () {
        return EmailValidator.validate(this.Email);
      },
      () => {
        console.log("please enter valid email");
      },
    ],
  },
  Message: {
    type: String,
    required: true,
  },
});

export const FormModel = mongoose.model("Messages", FormSchema);
