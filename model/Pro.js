import { AbstractModel } from "./AbstractModel.js";
import db from "../database.js";

export class Pro extends AbstractModel {
    table = "Pro";
    colones = ["id_user", "nom_cabinet", "adresse", "ville", "description", "horaire_cabinet"];

    async addMethodo(id_pro, id_methodo) {
        return await db.insert(`INSERT INTO Exercer(id_pro, id_methodo) VALUES (${id_pro}, ${id_methodo})`);
    }

    async getAllProByMethodo(id_methodo) {
        return await db.getall('SELECT * FROM Exercer WHERE id_methodo = ?', [id_methodo]);
    }

    async searchByMethodo(id_methodo, ville = '') {
        let sql = `SELECT Pro.id_pro, Pro.nom_cabinet, Pro.adresse, Pro.ville, Pro.description, Pro.horaire_cabinet,
                          User.nom, User.prenom
                   FROM Pro
                   JOIN User ON Pro.id_user = User.id_user
                   JOIN Exercer ON Exercer.id_pro = Pro.id_pro
                   WHERE Exercer.id_methodo = ?`;
        const params = [id_methodo];
        if (ville) {
            sql += ' AND LOWER(Pro.ville) LIKE LOWER(?)';
            params.push(`%${ville}%`);
        }
        return await db.getall(sql, params);
    }
}
