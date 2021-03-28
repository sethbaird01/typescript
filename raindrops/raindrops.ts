export default class Raindrops {
    public convert(numIn: number): number | string{
        let out = "";
        if(numIn%3 == 0){
            out += "Pling";
        }
        if(numIn%5 == 0){
            out += "Plang";
        }
        if(numIn%7 == 0){
            out += "Plong";
        }

        if(out != ""){
            return out;
        }
        return numIn.toString();
    }
}