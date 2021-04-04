export default class Grains {
    public static square(num : number): number {
        if(num <= 0 || num > 64){
            throw new Error();
        }
        let out = 1;
        for(let i = 1; i<num;i++){
            out *= 2
        }
        return out;
    }

    public static total(): number {
        let square = 1;
        let out  = 0;
        for(let i = 1; i<65;i++){
            square *= 2
            out += square;
        }
        return square;
    }
}