import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/NODE";

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is Connected");   
})

connection.on("disconnected", () => {
    console.log("DB is Disconnected");
})

connection.on("error", () => {
    console.log("Error Found " + error);
})