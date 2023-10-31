export interface IProducts{
    _id?: string;
    name: string;
    price:number;
    author:string;
    description:string;
    quantity:number;
    sale:number;
    tags:string,
    status:string;
    categoryId: any,
    data?: string,
    images?: string,
}