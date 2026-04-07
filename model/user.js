import { AbstractModel } from "./abstractModel.js";
import db from "../database.js";

export class User extends AbstractModel {

    constructor() {
        super("user", ["nom","prenom","age", "password", "mail"]);
    }

    async getByMail(mail) {
        const row = await db.getrow('SELECT * FROM User WHERE mail=?', [mail]);
        return row;
    }
}