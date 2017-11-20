import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service'

export class Conteneur implements OnInit {
  collegues:Collegue[]
  limite:number = 3;
  nom:string = "";

  constructor(public collegueService:CollegueService) { 
  }

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegue => this.collegues = collegue );
  }

  compare(a, b) {
    if (a.score < b.score)
      return 1;
    if (a.score > b.score)
      return -1;
    return 0;
  }

  jaime(collegue:Collegue){
    this.collegueService.aimerUnCollegue(collegue).then(data => {
      collegue = data
      this.collegues = this.collegues.filter(c => c.nom != collegue.nom)
      this.collegues.push(data)
      this.collegues.sort(this.compare)
    })
  }

  jedeteste(collegue:Collegue) {
    this.collegueService.detesterUnCollegue(collegue).then(data => {
      collegue = data
      this.collegues = this.collegues.filter(c => c.nom != collegue.nom)
      this.collegues.push(data)
      this.collegues.sort(this.compare)
    })
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