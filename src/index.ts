import express from "express";
import routerRoom from "./routes/roomsRoutes";
import routerBooking from "./routes/bookingsRoutes";
import routerUser from "./routes/usersRoutes";
import routerContact from "./routes/contactRoutes";
import routerLogin from "./routes/loginRoutes";
import { connectMongoDB } from "./mongo";
import { authToken } from "./middlerware/authToken";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
event?.preventDefault

connectMongoDB();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use("/rooms", authToken, routerRoom);
app.use("/bookings", authToken, routerBooking);
app.use("/users", authToken, routerUser);
app.use("/contacts", authToken, routerContact);
app.use("/login", routerLogin)

app.listen(PORT, () => {
  console.log(`Server run in the port ${PORT}`);
});
