import { NumberSymbol } from '@angular/common';

export interface IProduct {
    productId:number;
    productName: string;
    productCode: string;
    releaseDate: string; //NB! Dette er en string med vilje
    price: number;
    description: string;
    starRating: number;
    imageUrl:string;
}