import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://sawan:kiS4dKw3ZBqMkFJp@cluster0.tqy3tzt.mongodb.net/usersDB";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Auth database connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;
