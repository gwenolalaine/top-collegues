export class Collegue {
    score:number;

    constructor(public nom:string, public image:string){
        this.score = 0;
    }

    public getNom():string{
        return this.nom;
    }
    public getImage():string{
        return this.image;
    }
    public getScore():number{
        return this.score;
    }
}
