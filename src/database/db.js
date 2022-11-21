import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient (process.env.MONGO_URI);
try{
    await mongoClient.connect();
} catch (err){
    console.log(err)
}

const db = mongoClient.db("mywallet")
const usersCollection = db.collection("users")
const transactionsCollection = db.collection ("transactions")