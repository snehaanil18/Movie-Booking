import 'dotenv/config'; // Load environment variables

import express from 'express';
import cors from 'cors';
import db from './DB/Connection.mjs'; // Assuming the connection file is also converted to .mjs
import router from './Routes/router.mjs';

const MServer = express();

MServer.use(cors({
    origin: 'http://localhost:3000' 
}));
MServer.use(express.json());
MServer.use(router)

const PORT = process.env.PORT || 4000;

MServer.listen(PORT, () => {
    console.log(`MServer Listening on port ${PORT}`);
});

MServer.get('/', (req, res) => {
    res.send("Welcome to Movie App");
});