
export default class WordSearch {
  public arr: string[] = [];
  constructor(arrIn: string[]){
    this.arr = arrIn;
  }

  public find(words: string[]): Record<string, Record<string, number[]>> {
    const verticalSearchStrings: string[] = this.extractVerticals(this.arr);
    const horizontalSearchStrings: string[] = this.extractHorizontals(this.arr);
    let recordOut: Record<string, Record<string, number[]>> = {};

       //finding horizontals
      for(let searchStrIndex = 0; searchStrIndex<horizontalSearchStrings.length;searchStrIndex++){
        const currSearchStrIndex: number = (searchStrIndex >= (horizontalSearchStrings.length/2)) ? (Math.floor(searchStrIndex/2)) : searchStrIndex;
        const currHSearchString: string = horizontalSearchStrings[searchStrIndex];
       for(let wordIndex = 0; wordIndex<words.length;wordIndex++){
         const currWord: string = words[wordIndex];
        for(let phraseIndex = 0; phraseIndex<(currHSearchString.length-currWord.length)+1;phraseIndex++){
          //phraseIndex is the starting index of substring containing currentPhrase
          //in other words, the currentPhrase can be defined as the following
          const currPhrase: string = currHSearchString.substring(phraseIndex, (phraseIndex+currWord.length));
          if(currPhrase == currWord){
            if(!(searchStrIndex >= ((horizontalSearchStrings.length)/2))){
              //word is not reversed
              recordOut[currWord] = {"start": [currSearchStrIndex+1, phraseIndex+1], "end": [currSearchStrIndex+1,(phraseIndex+currWord.length)]};
            }
            else{
              recordOut[currWord] = {"start": [(Math.ceil(currSearchStrIndex/2))+1, currHSearchString.length-(currHSearchString.length-currPhrase.length)], "end": [(Math.ceil(currSearchStrIndex/2))+1, ((currHSearchString.length-(phraseIndex+currPhrase.length))+1)]}
              //                                                                             10             -    (     10          -         6          ) = 4                                   (       10            - (     4     +     6      )) + 1 =  1                                                        
              //this took more hours than i'd like to admit
            }
          }
        }
       }
      }
      //done finding horizontals

        //finding verticals
        for(let searchStrIndex = 0; searchStrIndex<verticalSearchStrings.length;searchStrIndex++){
        const currSearchStrIndex: number = (searchStrIndex >= (verticalSearchStrings.length/2)) ? (Math.floor(searchStrIndex/2)) : searchStrIndex;
        const currVSearchString: string = verticalSearchStrings[searchStrIndex];
        for(let wordIndex = 0; wordIndex<words.length;wordIndex++){
          const currWord: string = words[wordIndex];
        for(let phraseIndex = 0; phraseIndex<(currVSearchString.length-currWord.length)+1;phraseIndex++){
          const currPhrase: string = currVSearchString.substring(phraseIndex, (phraseIndex+currWord.length));
          if(currPhrase == currWord){
            if(!(searchStrIndex >= ((verticalSearchStrings.length)/2))){
              //word is not reversed
              const startRow: number = (phraseIndex+(currVSearchString.length-currPhrase.length));
              recordOut[currWord] = {"start": [startRow+1, searchStrIndex+1], "end": [(startRow+currPhrase.length),searchStrIndex+1]};
            }
            else{
              const startRow: number = (currVSearchString.length-(currVSearchString.length-phraseIndex)+1);
              recordOut[currWord] = {"start": [startRow-1, Math.floor(searchStrIndex/2)], "end": [this.arr.length-(phraseIndex+currPhrase.length)+1,Math.floor(searchStrIndex/2)]};
            }
          }
        }
       }
      }
      //done finding verticals

      //diagonals would go here :(

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
        if(arrIn[i].charAt(a) != undefined && arrIn[i].charAt(a) != ""){
          if(temp[a] != undefined){
            temp[a] += arrIn[i].charAt(a);
          }else{
            temp[a] = arrIn[i].charAt(a);
          }
        }
      }
    }

  const oldTempLen: number = temp.length;
    for(let i = 0; i < oldTempLen; i++){
        if(temp[i] != undefined && temp[i] != ""){
      temp[i+oldTempLen] = this.reverseString(temp[i]);

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


  public  reverseString(inStr: string): string {
//hope this works
    let temp: string = "";
    for(let i = inStr.length-1 ;i > -1 ; i--){
      temp += inStr.charAt(i)
    }
    return temp;
  }

  public longestElement(inArr: string[]): string {
    let longestE: string = "";
    for(let i = 0; i<inArr.length;i++){
      if(inArr[i].length > longestE.length){
        longestE = inArr[i];
      }
    }
    return longestE;
  }

}
