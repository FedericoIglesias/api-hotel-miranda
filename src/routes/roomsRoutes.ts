import express from "express";
// import * as roomsService from "../services/roomsService";
import * as roomsService from "../serviceSQL/roomsServiceSQL"
import { validateRoom, verifyIdDelete, verifyNewRoom } from "../utils/roomsUtils";


const routerRoom = express.Router();

routerRoom.get("/", async (req, res) => {
  res.send(await roomsService.getRooms());
});


routerRoom.get("/:id", async (req, res) => {
  const room =  await roomsService.getIdRoom(+req.params.id);
  return room !== undefined ? res.send(room) : res.send(404);
});

routerRoom.delete("/", async (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newRooms =  await roomsService.deleteRoom(id);

        res.send(newRooms)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerRoom.post("/",verifyNewRoom(validateRoom), async (req, res) => {
  try {

    const createNewRoom = await roomsService.addRoom(req.body);

    res.json(createNewRoom);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerRoom.put("/", async (req, res) => {
  try{
    await roomsService.updateRoom(req.body)
    res.send(200)
  } catch (e){
    res.status(400).send((<Error>e).message);
  }
});

export default routerRoom;
