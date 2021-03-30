

    const letters: string[] = ["aeioulnrst","dg","bcmp","fhvwy","k","jx","qz"];
    const points: number[] = [1,2,3,4,5,8,10];

    export default function(inVar: string | undefined): number {
        let out = 0;
        if(typeof(inVar) === "string"){
            let word: string = inVar;
            for(let i = 0;i<word.length;i++){
                //iterating through every letter in word input
                const currLetter: string = word.charAt(i).toLowerCase();
                for(let x = 0;x<letters.length;x++){
                    if(letters[x].includes(currLetter)){
                        out += points[x];
                    }
                }
            }
        }

        return out;
    }

