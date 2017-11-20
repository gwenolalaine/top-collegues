import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { ScorePipe } from '../pipe/score.pipe'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class CollegueService {

  constructor(private http: HttpClient){

  }
  
  listerCollegues():Promise<Collegue[]> {
    return this.http.get<Collegue[]>(environment.apiUrl + '/collegues/').toPromise();
  }

  sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    return this.http.post<Collegue>(environment.apiUrl + '/collegues/', newCollegue,
      httpOptions).toPromise();
  }
  
  aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    return this.http.put<Collegue>(environment.apiUrl + `/collegues/${unCollegue.nom}/score`,  {"avis" : "jaime"},
    httpOptions).toPromise();
  }
  
  detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    return this.http.put<Collegue>(environment.apiUrl +  `/collegues/${unCollegue.nom}/score`,  {"avis" : "jeDeteste"},
    httpOptions).toPromise();
  }

  deleteUnCollegue(nom:string):Promise<Collegue> {
    return this.http.delete<Collegue>(environment.apiUrl + `/collegues/${nom}`, httpOptions).toPromise();
  }
}