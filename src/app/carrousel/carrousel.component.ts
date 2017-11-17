import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service'
import { Conteneur } from '../conteneur/conteneur.component'

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent extends Conteneur implements OnInit {
  constructor(collegueService: CollegueService) { 
    super(collegueService);
  }
}
