import { AbstractModel } from "./AbstractModel.js";
import db from "../database.js";

export class User extends AbstractModel {

    table = "user";
    colones =  ["nom","prenom","age", "email" , "mdp"];

    
}