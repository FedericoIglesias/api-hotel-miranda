import express from "express";
import * as bookingsService from "../services/bookingsService";
import { verifyId } from "../functions";

const routerBooking = express.Router();

routerBooking.get("/", async (req, res) => {
  return res.send(await bookingsService.getBookings());
});

routerBooking.get("/:id", async (req, res) => {
  try {
    const id = verifyId(req.params.id);
    const booking = await bookingsService.getIdBooking(id);
    return booking !== undefined ? res.send(booking) : res.send(404);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerBooking.delete("/:id", async (req, res) => {
  try {
    const id = verifyId(req.params.id);

    await bookingsService.deleteBooking(id);

    return res.send(`Id ${id} was delete`);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerBooking.post("/", async (req, res) => {
  try {
    const createNewBook = await bookingsService.addBooking(req.body);

    return res.json({ Book: createNewBook });
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerBooking.put("/", async (req, res) => {
  try {
    const book = await bookingsService.putBooking(req.body.id, req.body.obj);
    return res.json({ Book: book });
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

export default routerBooking;
