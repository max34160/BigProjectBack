import { Pro } from "../model/Pro.js";
import { findMedecinByIdentification } from "./apiController.js";


const model = new Pro();

export async function getOne(req, res) {
    const pros = await model.get(req.params.id);
    if (pros) {
        res.json({pro : pros});
    } else {
        res.status(404).json({ error: "Pro not founnd"});
    }
}

export async function update(req, res) {
    req.body.id = req.params.id;
    const pro = await model.update(req.body,req.params.id);
    res.json({pro : pro});
}

export async function create(req, res) {
    const pro = {
        id_user: req.body.id_user,
        nom_cabinet: req.body.nom_cabinet,
        description: req.body.description,
        horaire_cabinet: req.body.horaire_cabinet,

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

export async function verify(req, res) {
    const { identificationNationale } = req.body;
    if (!identificationNationale)
        return res.status(400).json({ error: "identificationNationale requis" });

    const medecinData = await findMedecinByIdentification(identificationNationale);
    if (!medecinData)
        return res.status(404).json({ error: "Numéro d'identification non reconnu" });
    
    res.json({
        identificationNationale: medecinData["Identification nationale PP"],
        nom: medecinData["Nom d'exercice"],
        prenom: medecinData["Prénom d'exercice"],
        profession: medecinData["Libellé profession"],
        specialite: medecinData["Libellé spécialité"],
    });
}

export async function register(req, res) {
    const { identificationNationale, id_user, nom_cabinet, description, horaire_cabinet } = req.body;
    if (!identificationNationale || !id_user)
        return res.status(400).json({ error: "identificationNationale et id_user requis" });

    const medecinData = await findMedecinByIdentification(identificationNationale);
    if (!medecinData)
        return res.status(403).json({ error: "Numéro d'identification non reconnu" });

    const existing = await model.get(id_user);
    if (existing)
        return res.status(409).json({ error: "Ce professionnel a déjà un profil" });

    const profil = { id_user, nom_cabinet, description, horaire_cabinet };
    const created = await model.create(profil);
    res.status(201).json(created);
}