import mongoose from "mongoose";
const orderItemId = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  productQuantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: { type: [orderItemId] },
    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },

  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
