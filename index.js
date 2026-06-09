import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import apiRouter from './router/api.js';

const app = express();

// Headers de sécurité HTTP
app.use(helmet());

// CORS — origine contrôlée par variable d'environnement
app.use(cors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:4200',
    credentials: true
}));

// Rate limiting sur les routes d'authentification (anti brute-force)
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    message: { error: 'Trop de tentatives. Réessayez dans 15 minutes.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// Lancement l'API sur le port défini dans le .env
app.listen(process.env.PORT);
app.use(express.json());
app.use(cookieParser());

app.use('/api/session', authLimiter);
app.use('/api', apiRouter);
app.use('/', express.static('public'));

// Global error handler — catches any unhandled error thrown in route handlers
app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status ?? err.statusCode ?? 500;
    res.status(status).json({ message: err.message ?? 'Une erreur interne est survenue.' });
});

