import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
};

app.listen(3000, () => {
    console.log('Server is running on port:3000')
});

