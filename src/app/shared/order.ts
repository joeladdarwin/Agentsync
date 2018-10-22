export interface Order {
    orderid:string;
    uid:string;
    propertytype:string;
    squarefeet:string;
    address?:Address[];
    orders?:Products[];
    addons?:Addons[];
    meetingtype?:string;
    accesscode?:string;
    visitingdate?:Date;
    visitingtime?:Date;
    comments?:string;
    ordereddate?:Date;
    status?:string;
    orderprice?:any;
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