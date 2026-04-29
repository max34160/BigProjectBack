import { Ponderer } from "../model/Ponderer.js";


const model = new Ponderer();

export async function getOne(req, res) {
    const ponderers = await model.get(req.params.id);
    if (ponderers) {
        res.json(ponderers);
    } else {
        res.status(404).json({ error: "Filter not founnd"});
    }
}

export async function create(req, res) {
    const ponderer = {
        id_user: req.body.id_user,
        id_methodo: req.body.id_methodo,
        note: req.body.note
    }
    const ponderers = await model.create(ponderer);
    res.json(ponderers);
}