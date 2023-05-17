import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  subject: String,
});

export const ContactModel = model("Contact", contactSchema);
