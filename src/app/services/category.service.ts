import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = "https://localhost:44387/api/";

  constructor(private httpClient: HttpClient) { }
  
  getCategories():Observable<ListResponseModel<Category>> {
    let newPath=this.apiUrl+"categories/getall"
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
}