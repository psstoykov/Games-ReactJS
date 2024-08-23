import { mongoose } from 'mongoose'

const connectionString = 'mongodb://localhost:27017/Games';

export default async function configDatabase() {
    await mongoose.connect(connectionString);

    console.log('Database connected')
};
