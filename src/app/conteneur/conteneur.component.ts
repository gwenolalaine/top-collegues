import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service'
import {Observable, BehaviorSubject} from "rxjs/Rx";

export class Conteneur implements OnInit {
  collegues:Collegue[] = []
  limite:number = 3;
  nom:string = "";
  avis:Observable<Boolean>;
  avisSubject:BehaviorSubject<Boolean>
  actif:Boolean;
  
  constructor(public collegueService:CollegueService) { 
  }

  ngOnInit() {
    this.collegueService.listerCollegues().subscribe(collegue => this.collegues = collegue);
    this.collegueService.obtenirConnexion().subscribe(etat=>{this.actif = etat})
  }

  compare(a, b) {
    if (a.score < b.score)
      return 1;
    if (a.score > b.score)
      return -1;
    return 0;
  }

  jaime(collegue:Collegue){
    this.collegueService.aimerUnCollegue(collegue).subscribe(data => {
      collegue = data
      this.collegues = this.collegues.filter(c => c.nom != collegue.nom)
      this.collegues.push(data)
      this.collegues.sort(this.compare)
    })
    if(this.avis != null){
    this.avis.subscribe(value => value=true)
    }
  }

  jedeteste(collegue:Collegue) {
    this.collegueService.detesterUnCollegue(collegue).subscribe(data => {
      collegue = data
      this.collegues = this.collegues.filter(c => c.nom != collegue.nom)
      this.collegues.push(data)
      this.collegues.sort(this.compare)
    })
    if(this.avis != null){
    this.avis.subscribe(value => value=false)
    console.log(this.avis)
    }
  }

  deleteUnCollegue(nom:string){
    this.collegueService.deleteUnCollegue(nom);
  }


  limiter($event){
    this.limite = $event.target.value;
  }

  chercherNom($event){
    this.nom = $event.target.value;
  }

}