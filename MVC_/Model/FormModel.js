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
<<<<<<< HEAD
    // unique: true,
=======
>>>>>>> 55250ddc698929415a61b8efe5ab847c6b5f81c9
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
