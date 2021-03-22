class ReverseString {
  //code taken from prvious "word search" problem
  static reverse(inStr: string): string {
    let temp: string = "";
    for(let i = inStr.length-1 ;i > -1 ; i--){
      temp += inStr.charAt(i)
    }
    return temp;
  }
}

export default ReverseString
