import { write } from "../functions";
import { AddNewContact, Contact } from "../types";
import { connectMongoDB } from "../mongo";
import { ContactModel } from "../mongoose/contactModel";
import { response } from "express";


export const getContacts = () => {
  connectMongoDB()
  ContactModel.find({}).then(c => {
    response.json(c)
  })
};


export const getIdContact = (id: string)=> {
  connectMongoDB()
  ContactModel.findById(id).then(c => {
    response.json(c)
  })};


export const addContact = (addNewContact: AddNewContact ) => {
    connectMongoDB()
  const newContact = new ContactModel({
      name: addNewContact.name ,
      email: addNewContact.email ,
      phone: addNewContact.phone ,
      date: addNewContact.date ,
      subject: addNewContact.subject ,
    })
    newContact.save().then(c => {
      response.json(c)
    }).catch(error => 
      response.json(error));
  };
  
  export const deleteContacts = (id: string) =>{
    connectMongoDB()
    ContactModel.findByIdAndDelete(id).then(c => 
      response.send(200)).catch(error => response.json(error))
}

export const putContacts = (id: string , putKey: Partial<Contact> ) => {
  connectMongoDB()
  ContactModel.findByIdAndUpdate(id , putKey).then(c => 
    response.json(c)).catch(error => response.json(error))
}