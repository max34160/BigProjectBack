import { User } from "../model/User.js";
import bcrypt from "bcrypt";

const model = new User();

export async function getAll(req, res) {
    const users = await model.getAll();
    for (let i = 0; i < users.length; i++) {
        delete users[i].password;
    }
    res.json(users);
}

export async function getOne(req, res) {
    const users = await model.get(req.params.id);
    if (users) {
        delete users.password;
        res.json(users);
    } else {
        res.status(404).json({ error: "User not founnd"});
    }
}

export async function create(req, res) {
    const user = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        email: req.body.email,
        mdp: await bcrypt.hash(req.body.password, 12)  

    }
    const users = await model.create(user);
    delete users.password;
    res.json(users);
}

export async function update(req, res) {
    req.body.id = req.params.id;
    const users = await model.update(req.body);
    delete users.password;
    res.json(users);
}

export async function remove(req, res) {
    const users = await model.remove(req.params.id);
    res.json(users);
}