import { AbstractModel } from "./abstractModel.js";
import db from "../database.js";

export class Professionnel extends AbstractModel {

    constructor() {
        super("professionnel", ["id_user", "nom_cabinet", "description", "horaire_cabinet", "pdp"]);
    }

    async getByUserId(id_user) {
        return db.getrow("SELECT * FROM professionnel WHERE id_user=?", [id_user]);
    }
}
