export interface Roles{
    user?:boolean;
    agent?:boolean;
    admin?:boolean;
}
export interface User {
    uid:string;
    fullname:string;
    brokerage:string;
    email:string;
    phonenumber:string;
    account:string;
    roles:Roles;
}
