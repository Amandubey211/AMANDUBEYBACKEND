import mongoose from "mongoose";

const DBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log(`error occured in the server  :${error.message} .... `);
  }
};

export default DBConnect;
