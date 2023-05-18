import express from "express";
import routerRoom from "./routes/roomsRoutes";
import routerBooking from "./routes/bookingsRoutes";
import routerUser from "./routes/usersRoutes";
import routerContact from "./routes/contactRoutes";
require('dotenv').config()


const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/rooms", routerRoom);
app.use("/bookings", routerBooking);
app.use("/users", routerUser);
app.use("/contacts", routerContact);


app.listen(PORT, () => {
  console.log(`Server run in the port ${PORT}`);
});
