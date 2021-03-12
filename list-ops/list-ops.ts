export default class List<type>{
    public arr: type[];
    constructor(arrayIn: type[] = []){
        this.arr = arrayIn;
    }

    public append(listin: List<type>): List<type>{
        return new List<type>(this.arr.concat(listin.arr));
    }

    public get values(): type[] {
        return this.arr;
    }

    public concat(listin: List<any>): List<type> {
        if(typeof(listin.arr[0]) == "object"){

            for(let i = 0;i<listin.arr.length;i++){            
                this.arr = this.append(listin.arr[i]).arr;
            }
            return new List(this.arr);
        }
        else{
            return this.append(listin);
        }
    }

    public filter(fnIn: Function): List<type>{
        let tempArr: type[] = [];
        for(let i = 0;i<this.arr.length;i++){
            if(fnIn(this.arr[i])){
                tempArr.push(this.arr[i]);
            }
        }
        return new List(tempArr);
    }

    public length(): number {
        return this.arr.length;
    }

    public map(fnIn: Function): List<type> {
        let tempArr:any[] = [];
        for(let i = 0;i<this.arr.length;i++){
            tempArr.push(fnIn(this.arr[i]));
        }
        return new List(tempArr);
    }

    public reverse(): List<type> {
        let tempArr:type[] = []
        for(let i = this.arr.length-1;i>-1;i--){
            tempArr[this.arr.length-1-i] = this.arr[i];
        }
        return new List(tempArr);
    }



}