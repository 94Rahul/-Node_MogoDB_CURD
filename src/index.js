import MongooseDBconnection from './db/index.js'
import { app } from './app.js'
import dotenv from 'dotenv'
dotenv.config({ path: '../env' })

MongooseDBconnection().then(async (instance) => {
    app.on("error", (error) => {
        console.log("Error:", error);
        throw error;
    });
    app.listen(`${process.env.PORT}` || 8080, () => {
        console.log(`Server listening on port: ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log("Error While connecting Database::::>", error);
})