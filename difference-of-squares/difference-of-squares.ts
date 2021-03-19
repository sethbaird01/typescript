export default class Squares{
    public square: number;

    constructor(num: number){
        this.square = num;
    }

    public get sumOfSquares(): number{
        let out: number = 0;
        for(let i = 0;i<this.square+1;i++){
            out += Math.pow(i, 2);
        }
        return out;
    }

    public get squareOfSum(): number {
        let out: number = 0;
        for(let i = 0;i<this.square+1;i++){
            out += i;
        }
        return Math.pow(out, 2);
    }

    public get difference(): number{
        if(this.squareOfSum-this.sumOfSquares > this.sumOfSquares-this.squareOfSum){
            return this.squareOfSum-this.sumOfSquares;
        }else{
            return this.sumOfSquares-this.squareOfSum;
        }
    }

}