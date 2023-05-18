import express from "express";
import * as roomsService from "../services/roomsService";
import { verifyNewRoom } from "../utils/roomsUtils";
import { verifyId } from "../functions";

const routerRoom = express.Router();

routerRoom.get("/", async (req, res) => {
  res.send(await roomsService.getRooms());
});

routerRoom.get("/:id", async (req, res) => {
  try{
    const id = verifyId(req.params.id.toString())
    const room = await roomsService.getIdRoom(id);
    return room !== undefined ? res.send(room) : res.send(404);
  }catch(e){
    res.status(400).send((<Error>e).message)
  }
});

routerRoom.delete("/", async (req, res) => {
    try{
        const id = verifyId(req.body);

        const newRooms =  await roomsService.deleteRoom(id);

        res.send(newRooms)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerRoom.post("/", async (req, res) => {
  try {
    const veryfyRoomReq = verifyNewRoom(req.body);

    const createNewRoom = await roomsService.addRoom(veryfyRoomReq);

    res.json(createNewRoom);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerRoom.put("/", async (req, res) => {
  try{
    const room = await roomsService.putRoom(req.body.id, req.body.obj)
    res.json(room)
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

export default routerRoom;
