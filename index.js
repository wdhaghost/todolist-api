import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser';
import router from './Routes/routes.js'

const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL
const app = express();

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo Db is connected"))
    .catch((err) => console.error(err))

app.listen(PORT, () => {
    console.log("server running on " + PORT)
})

app.use(
    cors({
        origin: ["http://localhost:"+PORT],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)
app.use(cookieParser());
app.use(express.json());
app.use("/", router);