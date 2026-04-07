// Import de la bibliothèque
import express from 'express';
import cookieParser from 'cookie-parser';
import apiRouter from './routers/api.js';

// Création de l'API
const app = express();
// Lancement l'API sur le port défini dans le .env
app.listen(process.env.PORT);
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);
app.use('/', express.static('public'))