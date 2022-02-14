import { CallApiService } from './../call-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ship',
  templateUrl: './star-ship.component.html',
  styleUrls: ['./star-ship.component.css']
})
export class StarShipComponent implements OnInit {

  api:string = "https://swapi.py4e.com/api/starships";
  showShipInfoBool:boolean = false;
  url:string="";
  shipName:string="";
  film:string="";
  model:string="";
  manufacturer:string="";
  shipCost:string="";
  length:string="";
  atmos:string="";
  crew:string="";

  callApi:CallApiService;

  constructor(callApi:CallApiService) { this.callApi = callApi}

  showShipInfo(url:string,name:string,film:string,model:string,manufacturer:string,shipCost:string,length:string,atmos:string,crew:string){
    url= url.slice(37,-1);
    this.url = "https://starwars-visualguide.com/assets/img/starships/"+url+".jpg";

    //De descripción pongo la de la peli en la que sale por que no hay descripcion de la nave en la api

    this.shipName=name;
    this.callApi.descriptionShip(film);
    this.model=model;
    this.manufacturer = manufacturer;
    this.shipCost=shipCost;
    this.length=length;
    this.atmos=atmos;
    this.crew=crew;


    this.showShipInfoBool = true;
    document.getElementById("con")?.setAttribute("style","width:0");
  }

  backShipList(){
    this.showShipInfoBool=false
    document.getElementById("con")?.setAttribute("style","width:70%");
  }

  ngOnInit(): void {
    this.callApi.shipList();
  }

}
