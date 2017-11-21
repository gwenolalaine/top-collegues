import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Avis} from '../domain/avis';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { ScorePipe } from '../pipe/score.pipe'
import {Observable, BehaviorSubject} from "rxjs/Rx";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
export class CollegueService {
  
  subject:BehaviorSubject<Collegue[]>  = new BehaviorSubject([])
  subjectAvis:BehaviorSubject<Avis>  = new BehaviorSubject(null)
  enligne:BehaviorSubject<Boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient){
    if(http.request != null){
      this.enligne.next(true);
    }else{
      this.enligne.next(false);
    }

    console.log(this.enligne)
    this.refresh()
  }

  obtenirAvis():BehaviorSubject<Avis>{
    return this.subjectAvis
  }

  obtenirConnexion():BehaviorSubject<Boolean>{
    return this.enligne
  }

  refresh():void{
    this.http.get<Collegue[]>(environment.apiUrl + '/collegues/').subscribe(cols => this.subject.next(cols))
  }
  
  listerCollegues():Observable<Collegue[]> {
    this.refresh()
    return this.subject.asObservable();
  }

  sauvegarder(newCollegue:Collegue):void {
   this.http.post<Collegue>(environment.apiUrl + '/collegues/', newCollegue,
      httpOptions).subscribe(col =>{
        const collegues = this.subject.getValue()
        collegues.push(col);
        this.subject.next(collegues)
      });
     
  }
  
  aimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    this.subjectAvis.next(new Avis(unCollegue.nom, true))
    return this.http.put<Collegue>(environment.apiUrl + `/collegues/${unCollegue.nom}/score`,  {"avis" : "jaime"},
    httpOptions);
  }
  
  detesterUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    this.subjectAvis.next(new Avis(unCollegue.nom, false))
    return this.http.put<Collegue>(environment.apiUrl +  `/collegues/${unCollegue.nom}/score`,  {"avis" : "jeDeteste"},
    httpOptions);
  }

  deleteUnCollegue(nom:string):void {
    this.http.delete<Collegue>(environment.apiUrl + `/collegues/${nom}`, httpOptions).subscribe(col =>{
      const collegues = this.subject.getValue()
      collegues.push(col);
      this.subject.next(collegues)
    });
  }
}