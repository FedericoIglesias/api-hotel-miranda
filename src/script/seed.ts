import { generateUser } from "./userScript";
import { generateBooking } from "./bookingScript";
import { generateContact } from "./contactScript";
import { generateRoom } from "./roomScript";

async function generateDB() {
    await generateBooking(24);
    await generateContact(17);
    await generateRoom(4);
    await generateUser(9);
  }
  
  generateDB();