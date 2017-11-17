import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnCollegueComponent } from '../un-collegue/un-collegue.component'
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  collegue:Collegue
  nom: string;
  constructor(private route: ActivatedRoute, private collegueService: CollegueService) {
    route.params.subscribe(params => { this.nom = params['nom']; });
  }

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegues=>this.collegue = collegues.filter(c=>c.nom == this.nom)[0]);
  }

}
