import { validationResult } from "express-validator";
import { FormModel } from "../Model/FormModel.js";
import { sendMail } from "../Utils/Nodemailer.js";

export const PostMessage = async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { Name, Email, Message } = req.body;

    const Formdata = new FormModel({
      Name,
      Email,
      Message,
    });

    await Formdata.save();

    sendMail("formMessage", { Name, Email, Message })
      .then(() => {
        res.status(200).json({ success: true, message: "Message posted" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        res
          .status(500)
          .json({ success: false, message: "Failed to send email" });
      });
  } catch (error) {
    // Handle other errors
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
