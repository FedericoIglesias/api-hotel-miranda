import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  date: Number,
  subject: String,
});

export const ContactModel = model("Contact", contactSchema);
