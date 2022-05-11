import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { Client } from 'src/app/api/client';
import { Gender } from 'src/app/api/gender';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  //sexe: Gender;
  sexe: any[];
  etatCivil:any[];
  nationalite:any[];
  client:Client;
  submitted:boolean;
  clientForm: FormGroup;
  selectedDrop: SelectItem;

  constructor(private fb:FormBuilder,private messageService: MessageService) {
    this.clientForm = this.fb.group({
      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      prenom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      Gender: ['', Validators.required],
      birthDate:['', Validators.required],
      birthPlace: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      jobTitle: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      matrialStatus: ['', Validators.required],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      landline: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nationalite:['',Validators.required]
    });
    this.sexe = [
      {name: 'Feminin'},
      {name: 'Masculin'}
  ];
  this.etatCivil=[
    { name:'veuve'},
   { name:'mariée'},
   {
     name:'divorcée'
   },
   { name:'Célibataire'}


    
  ]
  this.nationalite=[
   { name:'Afghane (Afghanistan)'},
    {name: 'Albanaise (Albanie)'},
  {name:'Algérienne (Algérie)'},
{name:'Allemande (Allemagne)'},
   {name:'Americaine (États-Unis)'},
    {name:'Andorrane (Andorre)'},
    {name: 'Angolaise (Angola)'},
    {name:'Antiguaise-et-Barbudienne (Antigua-et-Barbuda)'},
    {name:'Argentine (Argentine)'},
    {name:'Armenienne (Arménie)'},
    {name:'Australienne (Australie)'},
    {name:'Autrichienne (Autriche)'},
    {name:'Azerbaïdjanaise (Azerbaïdjan)'},
    {name:'Bahamienne (Bahamas)'},
    {name:'Bahreinienne (Bahreïn)'},
    {name:'Bangladaise (Bangladesh)'},
    {name:'Barbadienne (Barbade)'},
    {name:'Belge (Belgique)'},
    {name:'Belizienne (Belize)'},
    {name:'Béninoise (Bénin)'},
    {name:'Bhoutanaise (Bhoutan)'},
    {name:'Biélorusse (Biélorussie)'},
    {name:'Birmane (Birmanie)'},
    {name:'Bissau-Guinéenne (Guinée-Bissau)'},
    {name:'Bolivienne (Bolivie)'},
    {name:'Bosnienne (Bosnie-Herzégovine)'},
    {name:'Botswanaise (Botswana)'},
    {name:'Brésilienne (Brésil)'},
    {name:'Britannique (Royaume-Uni)'},
    {name:'Brunéienne (Brunéi)'},
    {name:'Bulgare (Bulgarie)'},
    {name:'Burkinabée (Burkina)'},
    {name:'Burundaise (Burundi)'},
    {name:'Cambodgienne (Cambodge)'},
    {name:'Camerounaise (Cameroun)'},
    {name:'Canadienne (Canada)'},
    {name:'Cap-verdienne (Cap-Vert)'},
    {name:'Centrafricaine (Centrafrique)'},
    {name:'Chilienne (Chili)'},
    {name:'Chinoise (Chine)'},
    {name:'Chypriote (Chypre)'},
    {name:'Colombienne (Colombie)<'},
    {name:'Comorienne (Comores)'},
    {name:'Congolaise (Congo-Brazzaville)'},
    {name:'Congolaise (Congo-Kinshasa)'},
    {name:'Cookienne (Îles Cook)'},
    {name:'Costaricaine (Costa Rica)'},
    {name:'Croate (Croatie)'},
    {name:'Cubaine (Cuba)'},
    {name:'Danoise (Danemark)'},
    {name:'Djiboutienne (Djibouti)'},
    {name:'Dominicaine (République dominicaine)'},
    {name:'Dominiquaise (Dominique)'},
    {name:'Égyptienne (Égypte)'},
    {name:'Émirienne (Émirats arabes unis)'},
    {name:'Équato-guineenne (Guinée équatoriale)'},
    {name:'Équatorienne (Équateur)'},
    {name:'Érythréenne (Érythrée)'},
    {name:'Espagnole (Espagne)'},
    {name:'Est-timoraise (Timor-Leste)'},
    {name:'Estonienne (Estonie)'},
    {name:'Éthiopienne (Éthiopie)'},
    {name:'Fidjienne (Fidji)'},
    {name:'Finlandaise (Finlande)'},
    {name:'Française (France)'},
    {name:'Gabonaise (Gabon)'},
    {name:'Gambienne (Gambie)'},
    {name:'Georgienne (Géorgie)'},
    {name:'Ghanéenne (Ghana)'},
    {name:'Grenadienne (Grenade)'},
    {name:'Guatémaltèque (Guatemala)'},
    {name:'Guinéenne (Guinée)'},
    {name:'Guyanienne (Guyana)'},
    {name:'Haïtienne (Haïti)'},
    {name:'Hellénique (Grèce)'},
    {name:'Hondurienne (Honduras)'},
    {name:'Hongroise (Hongrie)'},
    {name:'Indienne (Inde)'},
    {name:'Indonésienne (Indonésie)'},
    {name:'Irakienne (Iraq)'},
    {name:'Iranienne (Iran)'},
    {name:'Irlandaise (Irlande)'},
    {name:'Islandaise (Islande)'},
    {name:'Israélienne (Israël)'},
    {name:'Italienne (Italie)'},
    {name:'Ivoirienne (Côte d Ivoire)'},
    {name:'Jamaïcaine (Jamaïque)'},
    {name:'Japonaise (Japon)'},
    {name:'Jordanienne (Jordanie)'},
    {name:'Kazakhstanaise (Kazakhstan)'},
    {name:'Kenyane (Kenya)'},
    {name:'Kirghize (Kirghizistan)'},
    {name:'Kiribatienne (Kiribati)'},
    {name:'Kittitienne et Névicienne (Saint-Christophe-et-Niévès)'},
    {name:'Koweïtienne (Koweït)'},
    {name:'Laotienne (Laos)'},
    {name:'Lesothane (Lesotho)'},
    {name:'Lettone (Lettonie)'},
    {name:'Libanaise (Liban)'},
    {name:'Libérienne (Libéria)'},
    {name:'Libyenne (Libye)'},
    {name:'Liechtensteinoise (Liechtenstein)'},
    {name:'Lituanienne (Lituanie)'},
    {name:'Luxembourgeoise (Luxembourg)'},
    {name:'Macédonienne (Macédoine)'},
    {name:'Malaisienne (Malaisie)'},
    {name:'Malawienne (Malawi)'},
    {name:'Maldivienne (Maldives)'},
    {name:'Malgache (Madagascar)'},
    {name:'Maliennes (Mali)'},
    {name:'Maltaise (Malte)'},
    {name:'Marocaine (Maroc)'},
    {name:'Marshallaise (Îles Marshall)'},
    {name:'Mauricienne (Maurice)'},
    {name:'Mauritanienne (Mauritanie)'},
    {name:'Mexicaine (Mexique)'},
    {name:'Micronésienne (Micronésie)'},
    {name:'Moldave (Moldovie)'},
    {name:'Monegasque (Monaco)'},
    {name:'Mongole (Mongolie)'},
    {name:'Monténégrine (Monténégro)'},
    {name:'Mozambicaine (Mozambique)'},
    {name:'Namibienne (Namibie)'},
    {name:'Nauruane (Nauru)'},
    {name:'Néerlandaise (Pays-Bas)'},
    {name:'Néo-Zélandaise (Nouvelle-Zélande)'},
    {name:'Népalaise (Népal)'},
    {name:'Nicaraguayenne (Nicaragua)'},
    {name:'Nigériane (Nigéria)'},
    {name:'Nigérienne (Niger)'},
    {name:'Niuéenne (Niue)'},
    {name:'Nord-coréenne (Corée du Nord)'},
    {name:'Norvégienne (Norvège)'},
    {name:'Omanaise (Oman)'},
    {name:'Ougandaise (Ouganda)'},
    {name:'Ouzbéke (Ouzbékistan)'},
    {name:'Pakistanaise (Pakistan)'},
    {name:'Palaosienne (Palaos)'},
    {name:'Palestinienne (Palestine)'},
    {name:'Panaméenne (Panama)'},
    {name:'Papouane-Néo-Guinéenne (Papouasie-Nouvelle-Guinée)'},
    {name:'Paraguayenne (Paraguay)'},
    {name:'Péruvienne (Pérou)'},
    {name:'Philippine (Philippines)'},
    {name:'Polonaise (Pologne)'},
    {name:'Portugaise (Portugal)'},
    {name:'Qatarienne (Qatar)'},
    {name:'Roumaine (Roumanie)'},
    {name:'Russe (Russie)'},
    {name:'Rwandaise (Rwanda)'},
    {name:'Saint-Lucienne (Sainte-Lucie)'},
    {name:'Saint-Marinaise (Saint-Marin)'},
    {name:'Saint-Vincentaise et Grenadine (Saint-Vincent-et-les Grenadines)'},
    {name:'Salomonaise (Îles Salomon)'},
    {name:'Salvadorienne (Salvador)'},
    {name:'Samoane (Samoa)'},
    {name:'Santoméenne (Sao Tomé-et-Principe)'},
    {name:'Saoudienne (Arabie saoudite)'},
    {name:'Sénégalaise (Sénégal)'},
    {name:'Serbe (Serbie)'},
    {name:'Seychelloise (Seychelles)'},
    {name:'Sierra-Léonaise (Sierra Leone)'},
    {name:'Singapourienne (Singapour)'},
    {name:'Slovaque (Slovaquie)'},
    {name:'Slovène (Slovénie)'},
    {name:'Somalienne (Somalie)'},
    {name:'Soudanaise (Soudan)'},
    {name:'Sri-Lankaise (Sri Lanka)'},
    {name:'Sud-Africaine (Afrique du Sud)'},
    {name:'Sud-Coréenne (Corée du Sud)'},
    {name:'Sud-Soudanaise (Soudan du Sud)'},
    {name:'Suédoise (Suède)'},
    {name:'Suisse (Suisse)'},
    {name:'Surinamaise (Suriname)'},
    {name:'Swazie (Swaziland)'},
    {name:'Syrienne (Syrie)'},
    {name:'Tadjike (Tadjikistan)'},
    {name:'Tanzanienne (Tanzanie)'},
    {name:'Tchadienne (Tchad)'},
    {name:'Tchèque (Tchéquie)'},
    {name:'Thaïlandaise (Thaïlande)'},
    {name:'Togolaise (Togo)'},
    {name:'Tonguienne (Tonga)'},
    {name:'Trinidadienne (Trinité-et-Tobago)'},
    {name:'Tunisienne (Tunisie)'},
    {name:'Turkmène (Turkménistan)'},
    {name:'Turque (Turquie)'},
    {name:'Tuvaluane (Tuvalu)'},
    {name:'Ukrainienne (Ukraine)'},
    {name:'Uruguayenne (Uruguay)'},
    {name:'Vanuatuane (Vanuatu)'},
    {name:'Vaticane (Vatican)'},
    {name:'Vénézuélienne (Venezuela)'},
    {name:'Vietnamienne (Viêt Nam)'},
    {name:'Yéménite (Yémen)'},
    {name:'Zambienne (Zambie)'},
    {name:'Zimbabwéenne (Zimbabwe)'},

  ]

}

  ngOnInit(): void {
   // this.getSexe();
  }
  saveClient(){
    this.submitted = true;
    if(this.clientForm.valid){
      console.log("hello");
    }
  }
  // getSexe(){
  //   console.log("hello");
  //   console.log(this.sexe);

  // }
}
