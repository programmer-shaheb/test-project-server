import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    jobSector: {
      type: [Number],
      required: true,
    },
    agreeToTerms: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

export default UserInfo;
