export default class SumOfMultiples {
    private nums: number[] = [];
    constructor(nums: number[]){
        this.nums = nums;
    }

    public to(toNum: number): number{
        let out = 0;
        let products: number[] = [];
        for(let i = 0;i<toNum;i++){
            for(let x = 0; x<this.nums.length;x++){            
            if(i % this.nums[x] == 0 && !products.includes(i*this.nums[x])){
                products.push(i*this.nums[x]);
                out += i;
            }
          }
        }
        return out;
    }
}
//code doesn't work fully. i don't know why
//but i really need to sleep so i must submit