//tip güvenli calismak icin apiden gelen veriyi modelliyoruz

export interface Product{
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
}