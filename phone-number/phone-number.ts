export default class PhoneNumber {
    private str: string;
    constructor(str: string){
        this.str = str;
    }

    public number(): string | undefined {
        let str = this.str;

        str = str.replace(/\(/g, "");
        str = str.replace(/\)/g, "");
        str = str.replace(/ /g, "");
        str = str.replace(/-/g, "");
        str = str.replace(/\./g, "");

        if(str.length == 11 && str.substring(0, 1) != "1"){
            return undefined;
        }

        if(str.length < 10 || str.length > 11){
            return undefined;
        }

        if(isNaN(Number(str))){
            return undefined;
        }

        if(str.length == 11 && str.substring(0, 1) == "1"){
            str = str.substring(1);
        }

        return str;

    }
}