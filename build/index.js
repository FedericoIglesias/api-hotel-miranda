"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomsRoutes_1 = __importDefault(require("./routes/roomsRoutes"));
const bookingsRoutes_1 = __importDefault(require("./routes/bookingsRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const mongo_1 = require("./mongo");
const authToken_1 = require("./middlerware/authToken");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const aws_serverless_express_1 = __importDefault(require("aws-serverless-express"));
const app = (0, express_1.default)();
const serverLess = aws_serverless_express_1.default.createServer(app);
dotenv_1.default.config();
(0, mongo_1.connectMongoDB)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/rooms", authToken_1.authToken, roomsRoutes_1.default);
app.use("/bookings", authToken_1.authToken, bookingsRoutes_1.default);
app.use("/users", authToken_1.authToken, usersRoutes_1.default);
app.use("/contacts", authToken_1.authToken, contactRoutes_1.default);
app.use("/login", loginRoutes_1.default);
exports.handler = (event, context) => {
    aws_serverless_express_1.default.proxy(serverLess, event, context);
};
exports.default = app;
// app.listen(PORT, () => {
//   console.log(`Server run in the port ${PORT}`);
// });
