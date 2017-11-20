import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  collegues:Collegue[];
  onAdd:boolean;
  onError:ConstrainBoolean
  

  constructor(public collegueService:CollegueService){

  }
  ngOnInit() {
    // TODO alimenter le tableau de collègues avec 5 collègues possédant des scores variés
    this.onAdd = true; 
    this.onError = true;
    this.collegueService.listerCollegues().then(data => {return this.collegues = data});
}

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    if(pseudo.value != "" && imageUrl.value != "") {
      this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value)).then(col=>{this.collegues.push(col)});
      
      this.onAdd = false;
    }else{
      this.onError = false;
    }
       
    return false;
  }
}