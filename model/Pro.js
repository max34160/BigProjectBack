import { AbstractModel } from "./AbstractModel.js";
import db from "../database.js";


export class Pro extends AbstractModel {

    table = "Pro";
    colones =  ["id_user","nom_cabinet","adresse" , "ville", "description", "horaire_cabinet"  ];

    async getAllProByMethodo(id_methodo) {
        const row = await db.getall('SELECT * FROM Exercer WHERE id_methodologie =?', [id_methodo]);
        return row;
    }

    

}

