import { RolType } from "./types/rolType.enum";

export class Member{
    id:number;
    username:string;
    name:string;
    age:number;
    email:string;
    dateOfBirth:Date;
    licenceType:string;
    licenceDate:Date;
    gender:string;
    city:string;
    country:string;
    address:string;
    role:RolType;
    images:string;
    isSafeDeleted:boolean;
    isActive:boolean;

}