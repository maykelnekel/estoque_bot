import mongoose from "mongoose";
const { Schema, model } = mongoose;

const registerSchema = new Schema({
  action: { type: String },
  user: { type: String },
  quantity: { type: Number, required: false, min: 0 },
  createdAt: { type: Date, default: Date.now },
});

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, min: 0, required: true },
    creatorUser: { type: String, required: true },
    lastUpdatedUser: { type: String, required: true },
    updatedAt: Date,
    createdAt: Date,
    registers: [registerSchema],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const stockSchema = new Schema({
  server: String,
  data: [itemSchema],
});

const StockItem = model("StockItem", stockSchema);

export default StockItem;
