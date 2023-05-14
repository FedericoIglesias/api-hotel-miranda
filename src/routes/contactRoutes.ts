import express from "express";
// import * as contactService from "../servicesFS/contactService";
import * as contactService from "../serviceSQL/contactServiceSQL";
import { verifyIdDelete } from "../utils/roomsUtils";
import { validateContact, verifyNewcontact } from "../utils/contactUtils";
import { AddNewContactsSQL } from "../types";

const routerContact = express.Router();

routerContact.get("/", async (req, res) => {
  res.send( await contactService.getContacts());
});

routerContact.get("/:id", async (req, res) => {
  const contact = await contactService.getIdContact(+req.params.id);
  return contact !== undefined ? res.send(contact) : res.send(404);
});

routerContact.delete("/", async (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newContacts = await contactService.deleteContacts(id);

        res.send(newContacts)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerContact.post("/",verifyNewcontact(validateContact), async (req, res) => {
  try {
    const createNewContact = await contactService.addContact(req.body);

    res.json(createNewContact);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerContact.put("/", async (req, res) => {
  try{
    await contactService.updateContact(req.body)
    res.send(200)
  } catch (error){
    throw error
  }
});

export default routerContact;
