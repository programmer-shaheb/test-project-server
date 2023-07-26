import SectorModel from "../models/sectors.js";

export const getSectors = async (req, res) => {
  try {
    const sectors = await SectorModel.find();

    res.json({
      data: sectors,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
