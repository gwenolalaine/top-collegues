import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexion:Boolean
  constructor(public collegueService:CollegueService) {
   }

  ngOnInit() {
    this.collegueService.obtenirConnexion().subscribe(c=>{this.connexion=c})
  }

}
