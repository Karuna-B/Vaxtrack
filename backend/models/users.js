import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  fathersName: { type: String, required: true },
  fathersCitizenshipNo: { type: String, required: true },
  mothersName: { type: String, required: true },
  mothersCitizenshipNo: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  birthCertificateNo: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  email: { type: String, required: false },
  vaccinesTaken: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vaccine" }],
});

const User = mongoose.model("User", userSchema);
export default User;
