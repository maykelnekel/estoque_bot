import "dotenv/config";
import mongoose from "mongoose";

const databaseConnect = async () => await mongoose.connect(process.env.DB_URL);

export default databaseConnect;
