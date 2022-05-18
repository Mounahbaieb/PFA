import { Gender } from "./gender";
export interface Client{
    id?:number;
    lastName?:string;
    firstName?:string;
    gender?:Gender;
    birthDate?:string;
    birthPlace?:string;
    jobtitle?:string;
    matrialStatus?:string;
    phoneNumber?:string;
    landline?:string;
    email?:string;
    password?:string;
    // resident:string;
    nationality?:string;

}