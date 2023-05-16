import mongoose from "mongoose";
// const {Schema , model} = mongoose


const connectionString = 'mongodb+srv://fede:fede@cluster0.evhsumh.mongodb.net/?retryWrites=true&w=majority'

export const connectMongoDB = () => { mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => {
    console.log('Database connected');
  })
  .catch(error => {
    console.log(error);
  })
}
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