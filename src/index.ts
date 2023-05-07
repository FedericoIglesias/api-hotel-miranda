import express from "express";
import routerRoom from "./routes/roomsRoutes";
import routerBooking from "./routes/bookingsRoutes";
import routerUser from "./routes/usersRoutes";
import routerContact from "./routes/contactRoutes";



const app = express();

app.use(express.json());

const port: number = 3000;

app.get("/", (_req, res) => {
  console.log("hi, i am the server ");
  res.send("UwU 2.0 ...");
});

app.use("/rooms", routerRoom);
app.use("/bookings", routerBooking);
app.use("/users", routerUser);
app.use("/contacts", routerContact);

app.listen(port, () => {
  console.log(`Server run in the port ${port}`);
});
