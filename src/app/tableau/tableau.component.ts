import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service'
import { Conteneur } from '../conteneur/conteneur.component'

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends Conteneur implements OnInit {
  constructor(collegueService: CollegueService) { 
    super(collegueService);
  }

}
