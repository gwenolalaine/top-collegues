import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service'
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  collegues:Collegue[] = [];
  onAdd:boolean;
  onError:ConstrainBoolean;
  actif:Boolean
  
  constructor(public collegueService:CollegueService){

  }
  ngOnInit() {
    // TODO alimenter le tableau de collègues avec 5 collègues possédant des scores variés
    this.onAdd = true; 
    this.onError = true;
    this.collegueService.listerCollegues().subscribe(collegues => this.collegues = collegues);
    this.collegueService.obtenirConnexion().subscribe(etat=>{this.actif = etat})
}

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value != "" && imageUrl.value != "") {
      this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value))
      
      this.onAdd = false;
    }else{
      this.onError = false;
    }
       
    return false;
  }
}