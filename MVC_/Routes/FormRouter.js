import express from "express";
import { PostMessage } from "../Controller/FormController.js";

const FormRouter = express.Router();

FormRouter.route("/contact").post(PostMessage);
export default FormRouter;
