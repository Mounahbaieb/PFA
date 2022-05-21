import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MegaMenuItem, MenuItem, SelectItem } from 'primeng/api';
import { ProduitService } from 'src/app/service/produit.service';
import {Product} from 'src/app/api/product';
import { SimulationService } from 'src/app/service/simulation.service';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { DemandeDeCredit } from 'src/app/api/demandeDeCredit';
@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  value8: any;
  vehicules: any;
  valSlider = 50;
  selectedDrop: SelectItem;
  simulationForm: FormGroup;
  submitted: boolean;
  demandeCreditsDataSource:any;

  min:any;
  max:any;
  duree:any
  vehicule:Product;
  
  demandeDeCredit:DemandeDeCredit;

  sliderMove:boolean=false;
  routeItems: MenuItem[];
  breadcrumbItems: MenuItem[];

  tieredItems: MenuItem[];

  items: MenuItem[];


  megaMenuItems: MegaMenuItem[];

  panelMenuItems: MenuItem[];

  stepsItems: MenuItem[];

  slideItems: MenuItem[];

  menuItems: MenuItem[];

  plainMenuItems: MenuItem[];

  pageIndex: number = 0;

  constructor(private router:Router,private fb:FormBuilder,private produitService:ProduitService,private simulationService:SimulationService) {
  this.simulationForm = this.fb.group({
    vehicule: ['', Validators.required],
    echeance: ['', Validators.required],
    duree: ['', Validators.required],

  });
  

   }

  ngOnInit(): void {
    this.routeItems = [
      {label: 'Simulateur de Financement', routerLink:'simulateur'},
      {label: 'Remplir le formulaire', routerLink:'formulaire'},
      {label: 'charger des documents', routerLink:'documents'},
      {label: 'recapitulation', routerLink:'recapitulation'},
      

  ];
    this.getAllProduct();
    this.demandeDeCredit={
      id:null,
      productId:"",
      nbrEcheance:null,
      duree:"",
     // gender:null,
     // birthDate:"",
     // birthPlace:"",
     // jobtitle:"",
     // matrialStatus:"",
     // phoneNumber:"",
     // landline:"",
   // resident:"",
     // nationality:"",
    }
    
  }

  suivant(){
    this.submitted=true
    if(this.simulationForm.valid){
      console.log("hello");
    }
  }
  getAllProduct(){
    this.produitService.getAll().subscribe(data=>{
      console.log('hello');
      this.vehicules=data;
       console.log(this.vehicules);
       this.sliderMove=true;

     })
  
    }
    // SliderMove(){
    //   this.vehicules =this.selectedDrop;
    //   console.log(this.vehicules.prix);
    //   this.min=(this.vehicules.prix*10)/100;
    //   this.max=this.vehicules.prix;
    // }
    saveSimulation(){
      this.submitted=true
      if(this.simulationForm.valid){

        this.vehicules=this.selectedDrop;
        this.vehicule=this.vehicules;
        console.log(this.vehicule.id);
        console.log(this.valSlider);
        console.log(this.duree);    
        this.vehicule={};
        this.submitted=false;
        this.demandeDeCredit.productId=this.vehicules.id;
        this.demandeDeCredit.duree=this.simulationForm.value.duree;
        this.demandeDeCredit.nbrEcheance=this.valSlider;
        this.simulationService.save(this.demandeDeCredit).subscribe((data:any)=>{
          console.log("saving")  
          this.demandeDeCredit=data;
          console.log(this.demandeDeCredit);

          console.log(this.demandeDeCredit.id);

          this.router.navigate(['/menu-landing/formulaire/',this.demandeDeCredit.id]);

        
        })
        
      


      }
      
      this.getAllProduct();



}
getDemandeDeCredits(){
  this.simulationService.getAll().subscribe(data=>{
    this.demandeCreditsDataSource=data;
  })
        
}

}  



