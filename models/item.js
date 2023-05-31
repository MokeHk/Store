import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: [true, "Please provide product name"],
      minlength: 2,
      maxlength: 20,
    },
    unit: {
      type: String,
      required: [true, "Please provide measurement unit"],
      minlength: 2,
      maxlwngth: 15,
    },
    quantity: {
      type: Number,
      required: [true, "Please provide the item quantity"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the price of the product"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", ItemSchema);
