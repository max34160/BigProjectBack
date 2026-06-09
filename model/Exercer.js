import { AbstractModel } from "./AbstractModel.js";
import db from "../database.js";

export class Exercer extends AbstractModel {

    table = "Exercer";
    colones = ["id_pro", "id_methodo"];

    async create(data) {
        await db.insert(
            'INSERT INTO Exercer(id_pro, id_methodo) VALUES (:id_pro, :id_methodo)',
            data
        );
        return data;
    }

    async removeEntry(id_pro, id_methodo) {
        return await db.delete('DELETE FROM Exercer WHERE id_pro = ? AND id_methodo = ?', [id_pro, id_methodo]);
    }
}