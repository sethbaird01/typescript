export default class WordProblem{
    private answerInt: number;
    public currentError: Error = new Error("no error");
    constructor(question: string){
        //remove last question mark
        question = question.replace(/\?/g, "");

        //initalize words array (every word in array without "what is")
        //initalize initalNum = first word in array
        let words = question.split(" ").slice(2,undefined);
        let initalNum = Number(words[0]);

        //throw error if first word in words array is not a number
        if(isNaN(initalNum)){
            this.currentError = new Error("yes error");
        }        

        //throw error if words array is of incorrect length

        if(((words.length-1) %2 != 0)){
            this.currentError = new Error("yes error");
    }

        //loop over the words to divide into instructions (phrases)
        let secondaryInstructions: string[][] = [];
        let tempWordArr: string[] = [];
        for(let i = 1;i<words.length;i++){
            tempWordArr.push(words[i]);
            if(!isNaN(Number.parseInt(words[i]))){
                //current word is number, record to temp arr then clear temp arr
                secondaryInstructions.push(tempWordArr);
                tempWordArr = [];
            }
        }

        //secondary arr is full of things like "divided by 3" or "minus 5"
        //parse these instructions
        let out: number = initalNum;
        for(let i =0;i<secondaryInstructions.length;i++){
            let instructionOperation = "";
            let instructionNumber = NaN;
            if(secondaryInstructions[i].length == 2){
                //something like "plus 2"
                instructionOperation=  secondaryInstructions[i][0];
               instructionNumber = Number(secondaryInstructions[i][1]);
           }

           if(secondaryInstructions[i].length == 3){
            instructionOperation = secondaryInstructions[i][0];
            instructionNumber = Number(secondaryInstructions[i][2]);            }

            //applying the parsed instructions to initalNum
            switch (instructionOperation) {
                case "plus":
                out += instructionNumber;
                    break;

                case "minus":
                out -= instructionNumber;
                    break;

                case "divided":
                out /= instructionNumber;
                    break;

                case "multiplied":
                out *= instructionNumber;
                    break;
        
                default:
                    //misread instructions are caught here
                    break;
            }
        }
        //basically return the processed initialNum
        this.answerInt = out;
    }

    public answer(): number {
        return this.answerInt;

    }

}