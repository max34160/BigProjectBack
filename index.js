import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import apiRouter from './router/api.js';

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || '*', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);
app.use('/', express.static('public'));

app.listen(process.env.PORT, () => {
    console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});