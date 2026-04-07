import { User } from "../model/user.js";
import jwt from 'jsonwebtoken';

const model = new User();

export async function authByToken(req, res, next) {
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        const reponse = await model.get(decoded.id);
        req.user = reponse;
        next();
    } catch {
        res.status(404).json({ error: "Wrong token"});
    }
}