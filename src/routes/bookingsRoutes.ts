import express from "express";
// import * as bookingsService from '../servicesFS/bookingsService'
import * as bookingsService from '../serviceSQL/bookingsServiceSQL'
import { verifyNewBooking } from "../utils/bookingsUtils";
import { verifyIdDelete } from "../utils/roomsUtils";


const routerBooking = express.Router();

routerBooking.get("/", async (req, res) => {
  const book = await bookingsService.getBookings()
  res.send(book);
});

routerBooking.get("/:id", async (req, res) => {
  const book = await bookingsService.getIdBooking(+req.params.id);
  return book !== undefined ? res.send(book) : res.send(404);
});

routerBooking.delete("/", async (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newBooks = await bookingsService.deleteBooking(id);

        res.send(newBooks)

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
  await bookingsService.updateBooking(req.body)
  res.send(200)
  
  
});

export default routerBooking;
