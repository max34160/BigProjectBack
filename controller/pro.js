import { Pro } from "../model/Pro.js";


const model = new Pro();

export async function getOne(req, res) {
    const pros = await model.get(req.params.id);
    if (pros) {
        res.json(pros);
    } else {
        res.status(404).json({ error: "Pro not founnd"});
    }
}

export async function create(req, res) {
    const pro = {
        id_user: req.body.id_user,
        nom_cabinet: req.body.nom_cabinet,
        description: req.body.description,
        horraire_cabinet: req.body.horraire_cabinet,
        pdp: req.body.pdp 

    }
    const pros = await model.create(pro);
    res.json(pros);
}

export async function addMethodologie(req, res) {
    const exercers = await model.addMethodo(req.params.id_user, req.params.id_methodo);
    if (exercers) {
        res.json(exercers);
    } else {
        res.status(404).json({ error: "Pro not founnd"});
    }
}

export async function getAllProByMethodologie(req, res) {
    const exercers = await model.getAllProByMethodo(req.params.id_methodo);
    if (exercers) {
        res.json(exercers);
    } else {
        res.status(404).json({ error: "Pro not founnd"});
    }
}