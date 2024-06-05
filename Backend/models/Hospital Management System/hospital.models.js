import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  specializedIn: [
    {
      type: String,
    },
  ],
});
export const Hospital = mongoose.model("Hospital", hospitalSchema);
