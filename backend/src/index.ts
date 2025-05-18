import express from 'express';
import session from 'express-session';
import cors from 'cors';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes';
import forumRoutes from './routes/forumRoutes';
import libraryRoutes from './routes/libraryRoutes'; // Ensure this is the correct path


dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true 
}));

app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE_URL,
    collectionName: 'sessions',
  }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  }
}));

app.use('/api/auth', authRoutes);
app.use('/api/forum', forumRoutes); 
app.use('/api/library', libraryRoutes); // Ensure this is the correct path




app.listen(5000, () => console.log('Server started on port 5000'));
