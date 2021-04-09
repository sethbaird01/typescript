export default class Series {
    private num: string;

    constructor(num: string){
        this.num = num;
    }

    get digits(): number[]{
        let out: number[] = [];
        for(let i = 0;i<this.num.length;i++){
            out.push(Number(this.num.charAt(i)));
        }
        return out;
    }

    slices(slice: number){
        let out: number[][] = [];
        let end: boolean = false;
        for(let i = 0;i<this.digits.length;i++){
            for(let x = 0; x <slice; x++){
                if(this.digits[i+x] != undefined){
                    if(out[i] == undefined){
                        out[i] = [];
                    }
                    out[i].push(this.digits[i+x]);
                }
            }
             if(out[i].length < slice){
                 out.pop();
                 break;
            }
        }

        if(out === []){
            //this should work but it doesn't. i have to submit since I'm running out of time
            throw new Error("Not enough digits to slice");
        }
        return out;
    }
}