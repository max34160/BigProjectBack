import { User } from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const model = new User();

export async function login(req, res) {
    const user = await model.getBy({email : req.body.email});
   
    if (user && bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 365 * 24 * 60 * 60 * 1000 });
        res.cookie('token', token, { maxAge: 365 * 24 * 60 * 60 * 1000 });
        res.json({ token: token });
    }
    res.status(404).json({ error: "Wrong credentials"});
}

export async function get (req, res) {
    delete req.user.password;
    res.json(req.user);
}