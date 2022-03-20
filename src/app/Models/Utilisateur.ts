import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export class Utilisateur {
    id: number;
    email: string;
    nom: string;
    password: string;
    prenom: string;
    role: string;
    type: string;
    token?: string;
}