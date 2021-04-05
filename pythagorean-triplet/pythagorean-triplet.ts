export default class Triplet {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public sum(): number {
        return this.a+this.b+this.c;
    } 

    public product(): number {
        return this.a*this.b*this.c;
    }

    public isPythagorean(): boolean{
        if((this.a**2 + this.b**2 == this.c**2) && (this.a < this.b && this.b < this.c)){
            return true;
        }
        return false;
    }

}