import { AbstractModel } from "./AbstractModel.js";
import db from "../database.js";


export class Pro extends AbstractModel {

    table = "Pro";
    colones =  ["id_user","nom_cabinet","adresse" , "ville", "description", "horaire_cabinet"  ];

    async addMethodo(id_pro,id_methodo) {
        const row = await db.insert(`INSERT INTO exercer(id_pro,id_methodo) VALUES (${id_pro},${id_methodo})`);
        return row;
    }

    async getAllProByMethodo(id_methodo) {
        const row = await db.getall('SELECT * FROM exercer WHERE id_methodo =?', [id_methodo]);
        return row;
    }

    

}

