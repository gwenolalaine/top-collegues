import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Input } from '@angular/core';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  constructor() { }

  ngOnInit() {
  }

  jaime(){
    this.collegue.score += 10;
  }

  jedeteste(){
    this.collegue.score -= 5;
  }

}
