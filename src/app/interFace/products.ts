export interface IProducts{
    _id?: string;
    name: string;
    price:number;
    author:string;
    description:string;
    quantity:number;
    sale:number;
    tags:string,
    discount:number
    images:string;
    status:string;
    categoryId: any,
}