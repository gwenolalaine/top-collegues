import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Input } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service'
import { UnCollegueComponent } from '../un-collegue/un-collegue.component'

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends UnCollegueComponent implements OnInit {
  constructor(collegueService: CollegueService) { 
    super(collegueService);
  }

}
