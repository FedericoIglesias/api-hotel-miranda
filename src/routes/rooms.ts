import express from "express";
import * as roomsService from "../services/roomsService";
import { verifyIdDelete, verifyNewRoom } from "../utils/roomsUtils";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(roomsService.getRooms());
});

router.get("/:id", (req, res) => {
  const room = roomsService.getIdRoom(+req.params.id);
  return room !== undefined ? res.send(room) : res.send(404);
});

router.delete("/", (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newRooms = roomsService.deleteRoom(id);

        res.send(newRooms)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

router.post("/", (req, res) => {
  try {
    const veryfyRoomReq = verifyNewRoom(req.body);

    const createNewRoom = roomsService.addRoom(veryfyRoomReq);

    res.json(createNewRoom);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

router.put("/", (req, res) => {});

export default router;
