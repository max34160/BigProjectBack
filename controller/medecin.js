import { Professionnel } from "../model/professionnel.js";
import { findMedecinByIdentification } from "./apiController.js";

const model = new Professionnel();

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
    const { identificationNationale, id_user, nom_cabinet, description, horaire_cabinet, pdp } = req.body;
    if (!identificationNationale || !id_user)
        return res.status(400).json({ error: "identificationNationale et id_user requis" });

    const medecinData = await findMedecinByIdentification(identificationNationale);
    if (!medecinData)
        return res.status(403).json({ error: "Numéro d'identification non reconnu" });

    const existing = await model.getByUserId(id_user);
    if (existing)
        return res.status(409).json({ error: "Ce professionnel a déjà un profil" });

    const profil = { id_user, nom_cabinet, description, horaire_cabinet, pdp };
    const created = await model.create(profil);
    res.status(201).json(created);
}

export async function getProfil(req, res) {
    const profil = await model.getByUserId(req.params.id_user);
    if (!profil)
        return res.status(404).json({ error: "Profil non trouvé" });
    res.json(profil);
}
