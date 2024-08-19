import { connect } from 'mongoose';
import DB_NAME from '../constants.js';
const MongooseDBconnection = async () => {

    let db_url = `${process.env.MONGO_DB_URI}/${DB_NAME}`;// Replace process.env.MONGO_DB_URI with your DB_URL in .env file
    console.log(db_url);
    try {
        const instance = await connect(db_url);
        console.log(`Database connected successfully...`);
        return instance;
    } catch (error) {
        console.log(`Error While connecting Database::::>${error}`);
        process.exit(1);
    }
};

export default MongooseDBconnection;