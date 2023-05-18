import { AddNewContact, Contact } from "../types";
import { connectMongoDB } from "../mongo";
import { ContactModel } from "../mongoose/contactModel";
import { response } from "express";


export const getContacts = async (): Promise<any> => {
  try{
    await connectMongoDB()
    return await ContactModel.find({})
  } catch(e){
    throw new Error((<Error>e).message)
  }
};


export const getIdContact = async (id: string)=> {
  try{
    await connectMongoDB()
    const contact = await ContactModel.findById(id)
    return contact !== null? contact : 'Id no found'
  }catch(e){
    throw new Error((<Error>e).message)
  }
  };


export const addContact = async (addNewContact: AddNewContact ) => {
  try{
    await connectMongoDB()
    const newContact = new ContactModel({
      name: addNewContact.name ,
      email: addNewContact.email ,
      phone: addNewContact.phone ,
      date: addNewContact.date ,
      subject: addNewContact.subject ,
    })
    const contact = await newContact.save()
    return contact
    }catch(e){
      throw new Error((<Error>e).message)
    }
    };
    
  export const deleteContacts = async (id: string) =>{
    try{
      await connectMongoDB()
      await ContactModel.findByIdAndDelete(id)
      return response.send(200)
      }catch(e){
        throw new Error((<Error>e).message)
      }
        
}

export const putContacts = async (id: string , putKey: AddNewContact ) => {
  try{
    await connectMongoDB()
    const contact = await ContactModel.findByIdAndUpdate(id , putKey)
    return contact
    }catch(e){
      throw new Error((<Error>e).message)
    }
}