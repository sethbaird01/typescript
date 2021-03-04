import { threadId } from "worker_threads";

export default class BinarySearch {
    public array: any;

    constructor(arr: number[]){
        if(this.isSorted(arr)){
            //input validation
            this.array = arr;
        }
        else{
            this.array = undefined;
        }
    }

    isSorted(arrIn: number[]): boolean{
        for(let i = 0;i<arrIn.length-1;i++){
            if(arrIn[i] > arrIn[i+1]){
                return false;
            }
        }
        return true;
    }

    indexOf(numIn: number): number {
if(this.array != undefined){
    let cur: number = Math.floor(this.array.length/2);
for (let i = 0; i < this.array.length; i++) {

    if(this.array[cur] == numIn){
        return cur;
    }

    if(numIn > this.array[cur]){
        cur = Math.floor(((cur + 1) + (this.array.length))/2);
    }

    if(numIn < this.array[cur]){
        cur = Math.floor(cur /2);
    }    
}

}
        return -1;
    }

}
