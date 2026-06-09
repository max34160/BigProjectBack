import { AbstractModel } from "./AbstractModel.js";
import db from "../database.js";

export class Exercer extends AbstractModel {

    table = "Exercer";
    colones =  ["id_pro","id_methodo"];

}