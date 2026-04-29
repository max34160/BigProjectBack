import { AbstractModel } from "./AbstractModel.js";


export class OpenData extends AbstractModel {

    table = "opendata";
    colones =  ["siret","nom","prenom"];
}