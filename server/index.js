import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import listingRouter from './routes/listing.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(__filename);

const app = express();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
};

// app.use((req, res, next) => {
//     res.header("Cross-Origin-Embedder-Policy", "require-corp");
//     res.header("Cross-Origin-Opener-Policy", "same-origin");
//     res.header("Cross-Origin-Opener-Policy', 'same-origin-allow-popups");
//     next();
// });

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'))
});


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});

// ok

app.listen(3000, () => {
    console.log('Server is running on port:3000')
});

