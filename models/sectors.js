import mongoose from "mongoose";

const subOptionSchema = new mongoose.Schema({
  value: Number,
  label: String,
  indent: { type: Boolean, default: false },
  subIndent: { type: Boolean, default: false },
  superIndent: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const optionSchema = new mongoose.Schema({
  value: Number,
  label: String,
  options: [subOptionSchema],
});

const mainSchema = new mongoose.Schema({
  value: Number,
  label: String,
  options: [optionSchema],
});

const SectorModel = mongoose.model("sectors", mainSchema);

export default SectorModel;
