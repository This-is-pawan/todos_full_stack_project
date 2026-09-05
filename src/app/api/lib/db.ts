import mongoose from 'mongoose';

type MongooseStore = {
  conn: typeof mongoose.connection | null;
  promise: Promise<typeof mongoose.connection> | null;
};

const mongodbUrl = process.env.MONGODB_URI!;

if (!mongodbUrl) {
  throw new Error('MONGODB_URI is not defined');
}

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: MongooseStore;
};

let store = globalWithMongoose.mongoose;

if (!store) {
  store = globalWithMongoose.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async () => {
  try {
    if (store.conn) {
      return store.conn;
    }

    if (!store.promise) {
      store.promise = mongoose.connect(mongodbUrl).then(() => mongoose.connection);
    }

    store.conn = await store.promise;
    return store.conn;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
};