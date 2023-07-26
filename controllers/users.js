import UserInfo from "../models/users.js";

export const saveUserInfo = async (req, res) => {
  try {
    const { id: userId, name, jobSector, agreeToTerms } = req.body;
    const userInfo = new UserInfo({ userId, name, jobSector, agreeToTerms });
    await userInfo.save();
    res.status(201).json(userInfo);
  } catch (error) {
    console.error("Error saving user information:", error);
    res.status(500).json({ error: "Failed to save user information" });
  }
};

export const getAllUserInfo = async (req, res) => {
  try {
    const allUserInfo = await UserInfo.find();
    res.status(200).json(allUserInfo);
  } catch (error) {
    console.error("Error fetching user information:", error);
    res.status(500).json({ error: "Failed to fetch user information" });
  }
};

export const getUserInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    const userInfo = await UserInfo.find({ userId });
    res.status(200).json(userInfo);
  } catch (error) {
    console.error("Error fetching user information:", error);
    res.status(500).json({ error: "Failed to fetch user information" });
  }
};

export const updateUserInfo = async (req, res) => {
  try {
    const { userId, name, jobSector, agreeToTerms } = req.body;
    const userInfo = await UserInfo.findOneAndUpdate(
      { userId },
      { name, jobSector, agreeToTerms },
      { new: true }
    );
    if (!userInfo) {
      return res.status(404).json({ error: "User info not found" });
    }
    res.status(200).json(userInfo);
  } catch (error) {
    console.error("Error updating user info:", error);
    res.status(500).json({ error: "Failed to update user info" });
  }
};
