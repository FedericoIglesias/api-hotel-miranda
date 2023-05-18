import mongoose from "mongoose";
require('dotenv').config()


const connectionString = process.env.URL as string

export const connectMongoDB = () => { mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false 
})
  .then(() => {
    console.log('Database connected');
  })
  .catch(error => {
    console.log(error);
  })
}
