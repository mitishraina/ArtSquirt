import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/PostRoutes.js';
import artSquirtRoutes from './routes/artSquirtRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit:'50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/artSquirt', artSquirtRoutes);

app.get('/', async(req, res) => {
    res.send("Hello from ArtSquirt");
})

const startServer = async() => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(3000, () => console.log("server is running on port http://localhost:3000"));
    } catch (error) {
        console.log(error);
    }
}
startServer();