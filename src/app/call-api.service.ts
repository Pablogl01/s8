import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  page:number = 1;
  api:string = "";
  s:any;
  film:string="";
  showShipInfoBool:boolean = false;

  constructor() { }

  shipList(){
    this.api = "https://swapi.py4e.com/api/starships/?page="+this.page;
    fetch(this.api)
      .then(response => response.json())
      .then(data => this.mostrarData(data))
      .catch(error => console.log(error))
  }

  descriptionShip(film:string){
    fetch(film)
      .then(response => response.json())
      .then(data => this.changeFilm(data))
      .catch(error => console.log(error))
  }

  changeFilm(des:any){
    this.film = des.opening_crawl;
  }
  
  mostrarData(dato:any){
    if(this.page==1){
      this.s=dato.results;
    }else if(this.page<=4){
      this.s = this.s.concat(dato.results);
    }
  }

  onScroll() {
    if (this.page < 4) {
      this.shipList();
      this.page ++;
    }
  }
}
