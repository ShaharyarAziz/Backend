import mongoose from "mongoose";

const medicalrecordSchema = mongoose.Schema({});
export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalrecordSchema
);
