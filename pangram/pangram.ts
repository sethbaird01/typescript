class Pangram {

    testString: string = "";

    constructor(inString: string){
        this.testString = inString;
    }

isPangram(): boolean {

    let inString: string = this.testString.toLowerCase();

    let newSet = new Set();

    for(let i: number = 0;i < inString.length;i++){
   
        let currChar: string = inString.charAt(i) as string;
        //ascii check
    if(/[A-z]/.test(currChar) ){
        newSet.add(currChar);
    }
}

// console.log(inString + " test finished, size = "+newSet.size);
if(newSet.size >= 26){
    return true;
}

return false;
}
}

export default Pangram