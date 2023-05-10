import express from "express";
// import * as roomsService from "../services/roomsService";
import * as roomsService from "../serviceSQL/roomsServiceSQL"
import { verifyIdDelete, verifyNewRoom } from "../utils/roomsUtils";


const routerRoom = express.Router();

routerRoom.get("/", (req, res) => {
  res.send(roomsService.getRooms());
});


routerRoom.get("/:id", (req, res) => {
  const room = roomsService.getIdRoom(+req.params.id);
  return room !== undefined ? res.send(room) : res.send(404);
});

routerRoom.delete("/", (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newRooms = roomsService.deleteRoom(id);

        res.send(newRooms)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerRoom.post("/", (req, res) => {
  try {
    const veryfyRoomReq = verifyNewRoom(req.body);

    const createNewRoom = roomsService.addRoom(veryfyRoomReq);

    res.json(createNewRoom);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerRoom.put("/", (req, res) => {
  roomsService.updateRoom(req.body.id, req.body.obj)
});

export default routerRoom;
