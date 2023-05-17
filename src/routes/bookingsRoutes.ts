import express from "express";
import * as bookingsService from '../services/bookingsService'
import { verifyNewBooking } from "../utils/bookingsUtils";
import { verifyIdDelete } from "../utils/roomsUtils";


const routerBooking = express.Router();

routerBooking.get("/", (req, res) => {
  res.send(bookingsService.getBookings());
});

routerBooking.get("/:id", (req, res) => {
  const room = bookingsService.getIdBooking(req.params.id);
  return room !== undefined ? res.send(room) : res.send(404);
});

routerBooking.delete("/", (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newRooms = bookingsService.deleteBooking(id);

        res.send(newRooms)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerBooking.post("/", (req, res) => {
  try {
    const veryfyRoomReq = verifyNewBooking(req.body);

    const createNewRoom = bookingsService.addBooking(veryfyRoomReq);

    res.json(createNewRoom);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerBooking.put("/", (req, res) => {});

export default routerBooking;
