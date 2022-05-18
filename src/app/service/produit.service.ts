import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const PRODUCT_API = 'http://localhost:9000/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(PRODUCT_API);
  }
}
