export default class Anagram {
    public word: string;

    constructor(word: string){
        this.word = word;
    }

    //i could've used way less .toLowerCase()'s, but i'm too tired. sorry.

    public matches(arrIn: string[]): string[]{
        let out: string[] = [];
        //each anagram word
        for(let cur = 0 ; cur<arrIn.length;cur++){

            if(this.word.length == arrIn[cur].length && this.word.toLowerCase() != arrIn[cur].toLowerCase()){
            //letters of global word

            let letters: string[] = [];
            for(let i = 0; i < this.word.length; i++){
                letters[i] = this.word.charAt(i).toLowerCase();
            }

            //each letter in current anagram word
            for(let i = 0 ; i < arrIn[cur].length ; i++){
                if(letters.includes(arrIn[cur].charAt(i).toLowerCase())){
                    //letter found in global string, remove letter
                    letters.splice(letters.indexOf(arrIn[cur].charAt(i).toLowerCase()), 1);
                }
            }

            if(letters.toString() === ""){
                out.push(arrIn[cur]);
            }

            }

        }
        return out;
    
}
}