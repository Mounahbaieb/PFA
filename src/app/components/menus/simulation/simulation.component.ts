import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SelectItem } from 'primeng/api';
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

  constructor(private router:Router,private fb:FormBuilder,private produitService:ProduitService,private simulationService:SimulationService) {
  this.simulationForm = this.fb.group({
    vehicule: ['', Validators.required],
    echeance: ['', Validators.required],
    duree: ['', Validators.required],

  });
  

   }

  ngOnInit(): void {
    this.getAllProduct();
    this.demandeDeCredit={
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
          console.log(this.demandeDeCredit);
          this.demandeDeCredit={}


        })
        
      
      
      
      }
      
      this.getAllProduct();

      this.router.navigate(['/menu-landing/formulaire']);



}
getDemandeDeCredits(){
  this.simulationService.getAll().subscribe(data=>{
    this.demandeCreditsDataSource=data;
  })
        
}

}  



