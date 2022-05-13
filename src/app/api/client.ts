import { Gender } from "./gender";
export interface Client{
    id:number;
    nom:string;
    prenom:string;
    gender:Gender;
    birthDate:string;
    birthPlace:string;
    jobtitle:string;
    matrialStatus:string;
    phoneNumber:string;
    landline:string;
    email:string;
    password:string;
    resident:string;
    nationality:string;
}