const MONGO_URI =
  'mongodb+srv://RomanTrynko:left4dead88@nextjscrud.a1pudto.mongodb.net/?retryWrites=true&w=majority';
import mongoose, { connection } from 'mongoose';

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log('Database connected');
    }
  } catch (error) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
