import { connectMongoDB } from "../mongo";
import { generateBooking } from "./bookingSeed";
import { generateContact } from "./contactSeed";
import { generateRoom } from "./roomSeed";
import { generateUser } from "./userSeed";


async function generateDB() {
  connectMongoDB()
    // await generateBooking(24);
    // await generateContact(15);
    await generateRoom(23);
    // await generateUser(6);
    console.log('end');
    
  }
  
generateDB()