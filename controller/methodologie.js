import { Methodologie } from "../model/Methodologie.js";


const model = new Methodologie();

export async function getOne(req, res) {
    const methodologies = await model.get(req.params.id);
    if (methodologies) {
        res.json(methodologies);
    } else {
        res.status(404).json({ error: "Methodologie not founnd"});
    }
}


export async function create(req, res) {
    const methodologie = {
        titre: req.body.titre,
        descriptif: req.body.descriptif,
        img_presentation: req.body.img_presentation
    }
    const methodologies = await model.create(methodologie);
    res.json(methodologies);
}

export async function getAllMethodologieByPro(req, res) {
    const exercers = await model.getAllMethodoByPro(req.params.id_user);
    if (exercers) {
        res.json(exercers);
    } else {
        res.status(404).json({ error: "Pro not founnd"});
    }
}