import { Exercer } from "../model/Exercer.js";


const model = new Exercer();

export async function getOneByProAndMethodo(req, res) {
    const data = {
        id_user : req.params.id_pro,
        id_methodologie : req.params.id_methodo
    };
    const exercer = await model.getBy(data);
    if (exercer) {
        res.json({exercer : exercer});
    } else {
        res.status(404).json({ error: "Pro not founnd"});
    }
}

export async function getOneByPro(req, res) {
    const exercer = await model.getBy({ id_pro : req.params.id_pro});
    if (exercer) {
        res.json({exercer : exercer});
    } else {
        res.json({ error: "Pro not founnd"});
    }
}

export async function update(req, res) {
    req.body.id_pro = Number(req.params.id_pro);
    console.log(req.body);
    const newExercer = await model.updateExercer(req.body,req.params.id_pro,req.params.id_methodologie);
    res.json({exercer : newExercer});
}

export async function create(req, res) {
    const exercer = {
        id_pro : req.body.id_pro,
        id_methodologie : req.body.id_methodo

    }
    const newExercer = await model.createNewExercer(exercer);
    res.json(({exercer : newExercer}));
}