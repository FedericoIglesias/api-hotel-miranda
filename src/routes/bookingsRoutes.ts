import express from "express";
import * as bookingsService from '../services/bookingsService'
import { verifyNewBooking } from "../utils/bookingsUtils";
import { verifyId } from "../functions";



const routerBooking = express.Router();

routerBooking.get("/", async (req, res) => {
  res.send(await bookingsService.getBookings());
});

routerBooking.get("/:id", async (req, res) => {
  try{
    const  id = verifyId(req.params.id)
    const booking = await bookingsService.getIdBooking(id);
    return booking !== undefined ? res.send(booking) : res.send(404);
  }catch(e){
    res.status(400).send((<Error>e).message)
  }
});

routerBooking.delete("/", async (req, res) => {
    try{
        const id = verifyId(req.body.id);

        const booking = await bookingsService.deleteBooking(id);

        res.send(booking)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerBooking.post("/", async (req, res) => {
  try {
    const veryfyBookReq = verifyNewBooking(req.body);

    const createNewBook = await bookingsService.addBooking(veryfyBookReq);

    res.json(createNewBook);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerBooking.put("/", async (req, res) => {
  try{
    const book = await bookingsService.putBooking(req.body.id, req.body.obj)
    res.json(book)
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

export default routerBooking;
