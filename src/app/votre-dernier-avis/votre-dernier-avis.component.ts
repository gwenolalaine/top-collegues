import { Component, OnInit } from '@angular/core';
import { Conteneur } from '../conteneur/conteneur.component'
import { CollegueService } from '../shared/service/collegue.service'
import {Avis} from '../shared/domain/avis'
@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  avis:Avis
  constructor(public collegueService:CollegueService) {
   }

  ngOnInit() {
    this.collegueService.obtenirAvis().subscribe(a=>{this.avis=a})
  }

}
