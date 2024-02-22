const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://jahanvi:P5Xc4LmGFDfxa0aH@cluster0.z9vfnko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
