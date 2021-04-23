import { Product } from "./product";
import { ResponseModel } from "./responseModel";

//apiden gelen json'ı modelliyoruz
export interface ProductResponseModel extends ResponseModel{
    data:Product[],
    success:boolean,
    message:string

}