export interface Order {
    orderid:string;
    property:string;
    squarefeet:string;
    address:Address[];
    products:Products[];
    addons:Addons[];
    access:string;
    accesscode?:string;
    visitingdate:Date;
    visitingtime:Date;
    comments?:string;
    ordereddate:Date;
    status:string
}
export interface Address{
    street:string;
    city:string;
    zip:string;
    unit?:string;
}
export interface Products{
    photography?:boolean;
    video?:boolean;
    tour360?:boolean;
    website?:boolean;
    floorplansBW?:boolean;
    floorplansC?:boolean;
    floorplanCF?:boolean;
    dsf50?:boolean;
    dsf100?:boolean;
    brouchre825?:boolean;
    brouchre850?:boolean;
    brouchre425?:boolean;
    brouchre450?: boolean;
}
export interface Addons{
    rushfee?:boolean;
    twlightshot?:boolean;
    communityshot?:boolean;
}