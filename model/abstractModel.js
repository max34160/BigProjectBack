import db from "../database.js";

export class AbstractModel {

    table; // required in children
    colones; // required in children

    async get(id) {
        const idCol = 'id_' + this.table
        const row = await db.getrow('SELECT * FROM ' + this.table + ' WHERE ' + idCol + '=?', [id]);
        return row;
    }

    async getAll() {
        const rows = await db.getall('SELECT * FROM ' + this.table);
        return rows;
    }

    async getBy(data) {
        return (await this.getAllBy(data))[0];
    }

    async getAllBy(data) {
        let colone = [];

        for (const key in data) {
            if (this.colones.includes(key))
                colone.push(key + ' = :' + key);
        }
        const rows = await db.getall('SELECT * FROM ' + this.table + ' WHERE ' + colone.join(' AND '), data);
        return rows;
    }

    async create(data) {
        let colone = [];
        let value = [];

        for (let i = 0; i < this.colones.length; i++) {
            colone.push(this.colones[i])
            value.push(":" + this.colones[i])
        }

        const sql = `INSERT INTO ${this.table}(${colone.join(',')}) VALUES (${value.join(',')})`;
        const insertId = await db.insert(sql, data);
        const newdata = this.get(insertId);

        return newdata;
    }

    async update(data) {
        let colone = [];

        for (const key in data) {
            if (this.colones.includes(key))
                colone.push(key + ' = :' + key);
        }

        const sql = `UPDATE ${this.table} SET ${colone.join(',')} WHERE id=:id`;
        await db.update(sql, data);
        const newdata = this.get(data.id);
        return newdata;
    }

    async remove(objOrId) {
        let id = objOrId
        if (objOrId.id)
            id = objOrId.id
        const sql = `DELETE FROM ${this.table} WHERE id=?`;
        const rowsAffected = await db.delete(sql, [id]);
        if (rowsAffected) return true;
        return false;
    }

}