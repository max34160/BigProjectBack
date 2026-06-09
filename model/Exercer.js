import { AbstractModel } from "./AbstractModel.js";
import db from "../database.js";

export class Exercer extends AbstractModel {

    table = "Exercer";
    colones = ["id_pro", "id_methodo"];

    async removeEntry(id_pro, id_methodo) {
        return await db.delete('DELETE FROM Exercer WHERE id_pro = ? AND id_methodo = ?', [id_pro, id_methodo]);
    }
}