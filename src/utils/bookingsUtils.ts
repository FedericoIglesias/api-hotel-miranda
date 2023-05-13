import Joi from "joi";
import { StatusBooking } from "../enum";
import { AddNewBooking, AddNewBookingSQL, Booking } from "../types";
import { response } from "express";

export const verifyNewBooking = (obj: AddNewBooking) => {
  try {
    validateBook.validate(obj);
    return obj;
  } catch (error) {
    response.send(422).send(error);
  }
};

const validateBook = Joi.object({
  name: Joi.string().max(30).min(1).required(),
  orderDate: Joi.date().timestamp("javascript").required(),
  checkIn: Joi.date().timestamp("javascript").required(),
  checkOut: Joi.date().timestamp("javascript").required(),
  idRoom: Joi.number().min(1).required(),
  status: Joi.string()
    .valid(
      StatusBooking.CheckIn,
      StatusBooking.CheckOut,
      StatusBooking.InProgress
    )
    .required(),
});
