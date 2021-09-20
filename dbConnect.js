import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rheasingh:rheasingh123@cluster.xhpn1.mongodb.net/testdb?retryWrites=true&w=majority"
    );

    console.log(`Mongo DB Connected`);
  } catch (err) {
    console.log(err);
  }
};
dbConnect();
