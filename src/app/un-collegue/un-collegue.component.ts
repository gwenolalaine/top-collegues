import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
  collegues:Collegue[]

  @Input() collegue:Collegue;
  constructor(private collegueService:CollegueService) { 
  }

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegue => this.collegues = collegue );
  }

  jaime(){
    this.collegueService.aimerUnCollegue(this.collegue).then(col=>this.collegue=col);
  }

  jedeteste(){
    this.collegueService.detesterUnCollegue(this.collegue).then(col=>this.collegue=col);
  }

}
