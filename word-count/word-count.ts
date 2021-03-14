export default class Words {
    private map: Map<string | number, number> = new Map();
    constructor(){
        this.map = new Map();
    }  

    public count(strIn: string): Map<string | number, number>{
        this.map = new Map();
        strIn = strIn.trim();

    const regex = "\\t|\\n| +";
    const wordArr: string[] | number[] = strIn.split(new RegExp(regex, 'g'));
   // console.log(wordArr);

    //remove empty elements
    for(let i = 0;i<wordArr.length;i++){
        wordArr[i] = wordArr[i].toLowerCase();
        if(wordArr[i] == ""){
            wordArr.splice(i,1);
        }
    }
    

    //add 
    // for(let i = 0;i<wordArr.length;i++){
    //     if(!isNaN(parseInt(wordArr[i]))){
    //         this.map.set(wordArr[i],1);

    // }
        for(let i = 0;i<wordArr.length;i++){
            if(!Array.from(this.map.keys()).includes(wordArr[i])){
                //make new key
                this.map.set(wordArr[i], 1);
            }else{
                //does contain element
                const temp: number = Array.from(this.map.values())[Array.from(this.map.keys()).indexOf(wordArr[i])]//fix
              //  console.log(temp);

                this.map.set(wordArr[i], temp+1);
            }

        }
        return this.map;
    }


}


