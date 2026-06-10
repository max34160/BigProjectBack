import { AbstractModel } from "./AbstractModel.js";


export class Methodologie extends AbstractModel {

    table = "Methodologie";
    colones =  ["titre","descriptif","img_presentation"];

    async getAllMethodoByPro(id_user) {
        const row = await db.getall('SELECT * FROM Exercer WHERE id_pro =?', [id_user]);
        return row;
    }
}