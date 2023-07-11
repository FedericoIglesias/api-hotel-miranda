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
import awsServerLessExpress from "aws-serverless-express";

const app = express();
const serverLess = awsServerLessExpress.createServer(app);

dotenv.config();

connectMongoDB();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/rooms", authToken, routerRoom);
app.use("/bookings", authToken, routerBooking);
app.use("/users", authToken, routerUser);
app.use("/contacts", authToken, routerContact);
app.use("/login", routerLogin)

exports.handler = (event: any, context: any) => {
  awsServerLessExpress.proxy(serverLess, event, context);
};

export default app;

// app.listen(PORT, () => {
//   console.log(`Server run in the port ${PORT}`);
// });
