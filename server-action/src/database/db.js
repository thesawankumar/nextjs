import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://sawan:KrhVNzMmGK3lX0Vo@cluster0.h7z267b.mongodb.net/server-actions";
  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;
