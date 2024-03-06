// import mongoose from "mongoose";
import { FormModel } from "../Model/FormModel.js";
import { sendMail } from "../Utils/Nodemailer.js";

export const PostMessage = async (req, res) => {
  try {
    const { Name, Email, Message } = req.body;
    if (!Name) {
      return res.send("Name Is Not Present");
    }
    if (!Email) {
      return res.send("Email Is Not Present");
    }
    if (!Message) {
      return res.send("Message Is Not Present");
    }

    const Formdata = new FormModel({
      Name: Name,
      Email: Email,
      Message: Message,
    });

    await Formdata.save();
    sendMail("formMessage", Formdata);

    res.status(200).send({
      success: true,
      message: "message posted successfully",
      Formdata,
    });
  } catch (error) {
    console.log(error);
  }
};
