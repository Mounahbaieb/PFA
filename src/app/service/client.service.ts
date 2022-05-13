import { Injectable } from '@angular/core';
import { Client } from '../api/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  client:Client;
  constructor() { }
  addClient(client){
        let clients=[];
    if(localStorage.getItem('clients')){
      clients=JSON.parse(localStorage.getItem('clients'));
      clients=[client, ...clients]
    }
    else{
      clients=[client];
    }
    localStorage.setItem('clients',JSON.stringify(clients));

  }
  getClient(){
    let data=localStorage.getItem('clients');
    this.client=JSON.parse(data);
   }

}
