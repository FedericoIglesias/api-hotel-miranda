import express from "express";
import * as contactService from "../services/contactService";
import { verifyNewcontact } from "../utils/contactUtils";
import { verifyIdDelete } from "../functions";

const routerContact = express.Router();

routerContact.get("/", (req, res) => {
  res.send(contactService.getContacts());
});

routerContact.get("/:id", (req, res) => {
  const contact = contactService.getIdContact(req.params.id);
  return contact !== undefined ? res.send(contact) : res.send(404);
});

routerContact.delete("/", (req, res) => {
    try{
        const id = verifyIdDelete(req.body);

        const newContacts = contactService.deleteContacts(id);

        res.send(newContacts)

    } catch (e){
        res.status(400).send((<Error>e).message)
    }
});

routerContact.post("/", (req, res) => {
  try {
    const veryfycontactReq = verifyNewcontact(req.body);

    const createNewContact = contactService.addContact(veryfycontactReq);

    res.json(createNewContact);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerContact.put("/", (req, res) => {});

export default routerContact;
