import { stringify } from "querystring";

export default class WordSearch {
  public arr: string[] = [];
  constructor(arrIn: string[]){
    this.arr = arrIn;
  }

  public find(words: string[]): Record<string, Record<string, number[]>> {
    const verticalSearchStrings: string[] = this.extractVerticals(this.arr)
    const horizontalSearchStrings: string[] = this.extractHorizontals(this.arr)
    //const diagonalSearchStrings: string[] = this.extractDiagonals(this.arr)


       //finding horizontals
       let foundInfo: any[][] = [];
       //foundInfo format: [word] [searchStrIndex] [startIndex] [endIndex]
       let recordOut: Record<string, Record<string, number[]>> = {};

      for(let searchStrIndex = 0; searchStrIndex<horizontalSearchStrings.length;searchStrIndex++){
        const currSearchStrIndex: number = (searchStrIndex >= (horizontalSearchStrings.length/2)) ? (Math.floor(searchStrIndex/2)) : searchStrIndex;
        const currHSearchString: string = horizontalSearchStrings[searchStrIndex];
       for(let wordIndex = 0; wordIndex<words.length;wordIndex++){
         const currWord: string = words[wordIndex];
        for(let phraseIndex = 0; phraseIndex<(currHSearchString.length-currWord.length)+1;phraseIndex++){
          const currPhrase: string = currHSearchString.substring(phraseIndex, (phraseIndex+currWord.length));
          if(currPhrase == currWord){
            //? ((currHSearchString.length-currWord.length)+1)-(Math.floor(phraseIndex/2))
            const tempphraseIndex: number = (phraseIndex >= ((currPhrase.length)/2)) ? currHSearchString.length-currPhrase.length : phraseIndex+1;
            recordOut[currWord] = {"start": [currSearchStrIndex+1, tempphraseIndex], "end": [currSearchStrIndex+1,(tempphraseIndex-1+currWord.length)]}
          }
        }
       }
      }
      //done finding horizontals


      return recordOut;
  }


  /**
   * @param string[] - square word grid
   * @returns string[] - all vertical lines in the grid, including reverse.
   */
  public extractVerticals(arrIn: string[]): string[]{
    let temp:string[] = [];
    for(let i = 0; i < arrIn.length; i++){
      for(let a = 0; a < arrIn[i].length; a++){
        //a is position in row
        //i is row
        if(temp[a] == undefined){
          temp[a] = "";
        }
      temp[a] += arrIn[i].charAt(a);
      }
    }

  const oldTempLen: number = temp.length;
    for(let i = 0; i < oldTempLen; i++){
        if(temp[i] != undefined && temp[i] != ""){
      temp[i+temp.length] = this.reverseString(temp[i]);

        }
    }
    return temp;
  }


    /**
   * @param string[] - square word grid
   * @returns string[] - all horizontal lines in the grid, including reverse.
   */
  public extractHorizontals(arrIn: string[]): string[]{
    let reverseStrings: string[] = [];
  
    for(let i = 0; i < arrIn.length; i++){
        reverseStrings[i] = this.reverseString(arrIn[i]);
    }

    return arrIn.concat(reverseStrings);

  }

    /**
   * @param string[] - square word grid
   * @returns string[] - all diagonal lines in the grid, including reverse.
   */
  // public extractDiagonals(arrIn: string[]): string[]{
  // }

  public  reverseString(inStr: string): string {
//hope this works
    let temp: string = "";
    for(let i = inStr.length-1 ;i > -1 ; i--){
      temp += inStr.charAt(i)
    }
    return temp;
  }

}
