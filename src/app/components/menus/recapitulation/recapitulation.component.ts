import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Client } from 'src/app/api/client';
import { ClientService } from 'src/app/service/client.service';
import { SimulationService } from 'src/app/service/simulation.service';

@Component({
  selector: 'app-recapitulation',
  templateUrl: './recapitulation.component.html',
  styleUrls: ['./recapitulation.component.scss']
})
export class RecapitulationComponent implements OnInit {
  idc:any;
  client:Client;
  ids:any;
  constructor(private activatedRouter:ActivatedRoute,private clientService:ClientService,private demandeDeSimulation:SimulationService) { }

  ngOnInit(): void {
    this.ids=this.activatedRouter.snapshot.params.ids;
    this.idc=this.activatedRouter.snapshot.params.idc;
    this.getClientByid();

  }
  getClientByid(){
    this.clientService.getClientById(this.idc).subscribe(data=>{
      this.client=data;
      console.log(this.client);
    })
  }

}
