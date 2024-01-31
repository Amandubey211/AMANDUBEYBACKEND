import mongoose from "mongoose";

const DBConnect = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://amandubey8833:fzQD7eeqDjvOZllX@portfolio.z236h66.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(`error occured in the server  :${error.message} .... `);
  }
};

export default DBConnect;
