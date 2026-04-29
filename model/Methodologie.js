import { AbstractModel } from "./AbstractModel.js";


export class Methodologie extends AbstractModel {

    table = "methodologie";
    colones =  ["titre","descriptif","img_presentation"];

    async getAllMethodoByPro(id_user) {
        const row = await db.getall('SELECT * FROM exercer WHERE id_pro =?', [id_user]);
        return row;
    }
}