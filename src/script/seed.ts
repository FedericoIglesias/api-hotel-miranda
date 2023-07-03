import { generateUser } from "./userScript";
import { generateBooking } from "./bookingScript";
import { generateContact } from "./contactScript";
import { generateRoom } from "./roomScript";

async function generateDB() {
    // await generateBooking(24);
    // await generateContact(17);
    await generateRoom(30);
    // await generateUser(9);
  }
  
  generateDB();
  console.log('is done');
  