import { generateBooking } from "./bookingSeed";
import { generateContact } from "./contactSeed";
import { generateRoom } from "./roomSeed";
import { generateUser } from "./userSeed";


async function generateDB() {
    await generateBooking(24);
    await generateContact(17);
    await generateRoom(4);
    await generateUser(9);
  }
  
generateDB()