import { User } from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const model = new User();

export async function getAll(req, res) {
    const users = await model.getAll();
    for (const user of users) delete user.password;
    res.json(users);
}

export async function getOne(req, res) {
    const user = await model.get(req.params.id);
    if (user) {
        delete user.password;
        res.json(user);
    } else {
        res.status(404).json({ error: "Utilisateur introuvable" });
    }
}

export async function create(req, res) {
    const user = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 12),
    };
    const created = await model.create(user);
    if (created) {
        const token = jwt.sign({ id: created.id_user }, process.env.JWT_SECRET, { expiresIn: 365 * 24 * 60 * 60 * 1000 });
        res.cookie('token', token, { maxAge: 365 * 24 * 60 * 60 * 1000 });
        res.json({ token, user: created });
    } else {
        res.status(500).json({ error: "Erreur lors de la création du compte" });
    }
}

export async function update(req, res) {
    req.body.id = req.params.id;
    let users = {};
    if(req.body.password){
        const update = {
            password : await bcrypt.hash(req.body.password, 12)  
        }
        const newUser = await model.update(update,req.params.id);
        users = newUser;
    }else{
        const newUser = await model.update(req.body,req.params.id);
        users = newUser;
    }
    
    delete users.password;
    res.json({user : users});
}

export async function remove(req, res) {
    const result = await model.remove(req.params.id);
    res.json(result);
}
