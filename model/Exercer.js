import { AbstractModel } from "./AbstractModel.js";
import db from "../database.js";

export class Exercer extends AbstractModel {

    table = "Exercer";
    colones = ["id_pro", "id_methodologie"];

    async createNewExercer(data) {
        let colone = [];
        let value = [];

        for (let i = 0; i < this.colones.length; i++) {
            colone.push(this.colones[i])
            value.push(":" + this.colones[i])
        }

        const sql = `INSERT INTO ${this.table}(${colone.join(',')}) VALUES (${value.join(',')})`;
        const exercer = await db.insert(sql, data);
        const newdata = this.getExercer(data.id_pro);
        
        return newdata;
    }

    async getExercer(id) {
        
        const row = await db.getrow('SELECT * FROM ' + this.table + ' WHERE id_pro =?', [id]);
        return row;
    }

    async updateExercer(data,id_pro,id_methodologie) {
        let colone = [];
        for (const key in data) {
            if (this.colones.includes(key))
                colone.push(key + ' = :' + key);
        }
        console.log('UPDATE '+this.table+' SET '+colone.join(',')+' WHERE id_pro = '+id_pro+' AND id_methodologie = '+id_methodologie)
        await db.update('UPDATE '+this.table+' SET '+colone.join(',')+' WHERE id_pro = '+id_pro+' AND id_methodologie = '+id_methodologie, data);
        const newdata = this.getExercer(id_pro);
        return newdata;
    }

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