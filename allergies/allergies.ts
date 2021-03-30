

export default class Allergies {
    private num;
    private startingNum;
    constructor(numIn: number){
        this.num = numIn;
        this.startingNum = numIn;
    }

    public allergicTo(str: string): boolean {
       const list = this.list();
        for(let i = 0;i<list.length;i++){
            if(list[i] == str){
                return true;
            }
        }

        return false;
    }

    public list(): string[] {
        let list: string[] = [];
        this.num = this.startingNum;

        if(this.num - 256 >= 0){
            this.num -= 256
        }
        if(this.num - 128 >= 0){
            this.num -= 128
            list.push("cats");
        }
        if(this.num - 64 >= 0){
            this.num -= 64
            list.push("pollen");
        }
        if(this.num - 32 >= 0){
            this.num -= 32
            list.push("chocolate");
        }
        if(this.num - 16 >= 0){
            this.num -= 16
            list.push("tomatoes");
        }
        if(this.num - 8 >= 0){
            this.num -= 8
            list.push("strawberries");
        }
        if(this.num - 4 >= 0){
            this.num -= 4
            list.push("shellfish");
        }
        if(this.num - 2 >= 0){
            this.num -= 2
            list.push("peanuts");
        }
        if(this.num - 1 >= 0){
            this.num -= 1
            list.push("eggs");
        }



        return list.reverse();
    }
    

}