import { Gender } from "./gender";
export interface Client{
    nom?:string;
    prenom?:string;
    gender?:Gender;
    birthDate?:string;
    birthPlace?:string;
    jobtitle?:string;
    matrialStatus?:string;
    phoneNumber?:string;
    landline?:string;
    email?:string;
    resident?:string;
    nationality?:string;
}