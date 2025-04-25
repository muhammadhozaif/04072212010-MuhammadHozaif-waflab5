const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => {
    console.log("mongo db connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
const dataSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  ipAddress: String,
  organization: String,
});
