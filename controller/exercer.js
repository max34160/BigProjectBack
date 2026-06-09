import { Exercer } from "../model/Exercer.js";


const model = new Exercer();

export async function getOneByProAndMethodo(req, res) {
    const data = {
        id_pro: req.params.id_pro,
        id_methodo: req.params.id_methodo
    };
    const exercer = await model.getBy(data);
    if (exercer) {
        res.json({exercer : exercer});
    } else {
        res.status(404).json({ error: "Pro not founnd"});
    }
}

export async function getOneByPro(req, res) {
    const exercer = await model.getAllBy({ id_pro: req.params.id_pro });
    if (exercer) {
        res.json({exercer : exercer});
    } else {
        res.status(404).json({ error: "Pro not founnd"});
    }
}

export async function update(req, res) {
    const newExercer = await model.update(req.body, req.params.id_pro);
    res.json({exercer : newExercer});
}

export async function create(req, res) {
    const exercer = {
        id_pro: req.body.id_pro,
        id_methodo: req.body.id_methodo
    };
    const newExercer = await model.create(exercer);
    res.json(({exercer : newExercer}));
}