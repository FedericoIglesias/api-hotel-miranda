import express from "express";
import * as contactService from "../services/contactService";
import { verifyNewcontact } from "../utils/contactUtils";
import { verifyId } from "../functions";

const routerContact = express.Router();

routerContact.get("/", (req, res) => {
  res.send(contactService.getContacts());
});

routerContact.get("/:id", (req, res) => {
  try{
    const id = verifyId(req.params.id.toString())
    const contact = contactService.getIdContact(id);
    return contact !== undefined ? res.send(contact) : res.send(404);
  } catch(e){
    res.status(400).send((<Error>e).message)
  }
});

routerContact.delete("/", (req, res) => {
    try{
        const id = verifyId(req.body);

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
