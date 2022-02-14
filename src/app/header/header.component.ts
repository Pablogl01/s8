import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { isJSDocThisTag } from 'typescript';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:string = "";
  pass:string = "";
  email:string = "";
  lastName:string = "";
  usuarios:any;
  prueba:Array<string> = [];
  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
    document.getElementById("home")?.setAttribute('style','border-bottom+: #1453a3 solid 2px;');
  }

  openModal(content:any){
    this.modal.open(content);
  } 

  pageSelected(pag:string){
    if(pag=="h"){
      document.getElementById("home")?.setAttribute('style','border-bottom: #1453a3 solid 2px;');
      document.getElementById("ships")?.setAttribute('style','');
    }else{
      document.getElementById("ships")?.setAttribute('style','border-bottom: #1453a3 solid 2px;');
      document.getElementById("home")?.setAttribute('style','');
    }
  }

  singIn(){
    this.name = (document.getElementById("nameS") as HTMLInputElement).value;
    this.pass = (document.getElementById("passS") as HTMLInputElement).value;
    if(this.name != "" && this.pass != ""){
      this.usuarios=localStorage.getItem("usuarios");
      this.usuarios = JSON.parse(this.usuarios);
      if(this.usuarios.name == this.name && this.usuarios.pass == this.pass){
        console.log("oleeee");
      }
      else{
        document.getElementById("create")?.click();
      }
    }
  }

  createAcc(){
    this.name = (document.getElementById("nameC") as HTMLInputElement).value;
    this.lastName = (document.getElementById("lastNameC") as HTMLInputElement).value;
    this.email = (document.getElementById("email") as HTMLInputElement).value;
    this.pass = (document.getElementById("passC") as HTMLInputElement).value;
    if(this.name != "" && this.pass != "" && this.email != "" && this.lastName != ""){
      this.usuarios = localStorage.getItem("usuarios");
      if(this.usuarios == null){
        this.usuarios = ('{"name":"'+this.name+'","lastName":"'+this.lastName+'","email":"'+this.email+'","pass":"'+this.pass+'"}');
        localStorage.setItem("usuarios",this.usuarios);

      }
    }
  }

}
