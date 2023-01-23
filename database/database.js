import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try{
    await mongoClient.connect();
    console.log("MongoDB Connected successfully");
} catch (err){
    console.log(err);
}

const db = mongoClient.db();
export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");