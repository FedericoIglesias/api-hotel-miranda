"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
var mongoose_1 = require("mongoose");
// const {Schema , model} = mongoose
var connectionString = 'mongodb+srv://fede:fede@cluster0.evhsumh.mongodb.net/?retryWrites=true&w=majority';
var connectMongoDB = function () {
    mongoose_1.default.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        .then(function () {
        console.log('Database connected');
    })
        .catch(function (error) {
        console.log(error);
    });
};
exports.connectMongoDB = connectMongoDB;
// const roomSchema = new Schema({
//   photo: String,
//   numberRoom: String,
//   roomType: String,
//   amenities: String,
//   price: Number,
//   offerPercent: Number,
//   status: String
// });
// const Room = model('Room',roomSchema)
// const room1 = new Room({
//   photo: 'asd',
//   numberRoom: 'asd',
//   roomType: 'TypeRoom.Deluxe',
//   amenities: 'asd',
//   price: 0,
//   offerPercent: 0,
//   status: 'StatusRoom.Available'
// })
// room1.save()
// .then(result => {
//   console.log(result);
//   mongoose.connection.close()
// })
// .catch(error => {
//   console.error(error);
// })
