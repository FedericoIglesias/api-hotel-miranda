import express from "express";
import routerRoom from "./routes/roomsRoutes";
import routerBooking from "./routes/bookingsRoutes";
import routerUser from "./routes/usersRoutes";
import routerContact from "./routes/contactRoutes";
import passport from "passport";
import routerLogin from "./routes/login";
import bodyParser from "body-parser";



const app = express();

app.use(express.json());

const port: number = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  console.log("hi, i am the server ");
  res.send("UwU 2.0 ...");
});




app.use("/rooms",passport.authenticate('jwt', { session: false }), routerRoom);
app.use("/bookings", routerBooking);
app.use("/users", routerUser);
app.use("/contacts", routerContact);
app.use("/login", routerLogin)

app.listen(port, () => {
  console.log(`Server run in the port ${port}`);
});
