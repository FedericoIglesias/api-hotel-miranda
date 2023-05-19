import express from "express";
import * as contactService from "../services/contactService";
import { verifyNewcontact } from "../utils/contactUtils";
import { verifyId } from "../functions";
import { UserModel } from "../mongoose/userModel";

const routerContact = express.Router();

routerContact.get("/", async (req, res) => {
  return res.send({Contacts: await contactService.getContacts()});
});

routerContact.get("/:id", async (req, res) => {
  try {
    const id = verifyId(req.params.id);
    const contact = await await contactService.getIdContact(id);
    return contact !== undefined ? res.send({contact: contact}) : res.send(404);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerContact.delete("/", async (req, res) => {
  try {
    const id = verifyId(req.body.id);

    await contactService.deleteContacts(id);

    return res.send(`Id ${id} was delete`);
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerContact.post("/", async (req, res) => {
  try {
    const veryfycontactReq = verifyNewcontact(req.body);

    const createNewContact = await contactService.addContact(veryfycontactReq);

    return res.json({NewContact: createNewContact});
  } catch (e) {
    res.status(400).send((<Error>e).message);
  }
});

routerContact.put("/", async (req, res) => {
  try {
    const contact = await contactService.putContacts(req.body.id, req.body.obj);
    return res.json({contact: contact});
  } catch (e) {
    throw new Error((<Error>e).message);
  }
});

export default routerContact;
