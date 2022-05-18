import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';
const SIMULATION_API = 'http://localhost:9000/api/simulations';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(SIMULATION_API);
  }
  save(vehicule:Product){
    return this.http.post(SIMULATION_API,vehicule);
  }


}

