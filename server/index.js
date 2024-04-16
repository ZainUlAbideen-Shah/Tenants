import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
};

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});

app.listen(3000, () => {
    console.log('Server is running on port:3000')
});

