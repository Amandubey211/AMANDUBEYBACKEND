import express from "express";
import DBConnect from "./Data_Base/DB.js";
import FormRouter from "./MVC_/Routes/FormRouter.js";
import cors from "cors";
import { config } from "dotenv";

const app = express();
config({ path: "./secret/secret.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
  })
);

app.use("/api", FormRouter);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server is Kicking" });
});

DBConnect();
app.listen(process.env.PORT, () => {
  console.log(`server connection successfull. ${process.env.PORT}`);
});
