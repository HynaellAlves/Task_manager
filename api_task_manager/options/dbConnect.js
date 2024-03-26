import mongoose from "mongoose";

async function dbConnect(){

  mongoose.connect(process.env.CONNECTION_STRING);

  return mongoose.connection;

}

export default dbConnect