// Import de la bibliothèque
import express from 'express';
import cookieParser from 'cookie-parser';
import apiRouter from './router/api.js';
import cors from 'cors';

// Création de l'API
const app = express();

// autorisation de connexion front end
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

// Lancement l'API sur le port défini dans le .env
app.listen(process.env.PORT);
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);
app.use('/', express.static('public'))