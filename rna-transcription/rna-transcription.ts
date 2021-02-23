class Transcriptor {
  toRna(strIn: string): string {
    let charArr: string[] = strIn.split('');
    let output: string = "";
    for(let i: number = 0; i<charArr.length;i++){
      switch(charArr[i]){
        case "G":
          output += "C";
          break;
        case "C":
          output += "G";
          break;
        case "T":
          output += "A";
          break;
        case "A":
          output += "U";
          break;
        default:
          throw new Error("Invalid input DNA.");
          break;
      }
    }
    return output;
  }
}

export default Transcriptor
