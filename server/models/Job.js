import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    pay: { type: Number, required: true},
  },
  { timestamps: true, toJSON: { virtuals: true } } // _id: && id
);

export default Job;