export default class Acronym {
  public static parse(phrase: string): string {
    let words: string[] = phrase.split(" ");
    let out = '';
    for(let i = 0 ;i<words.length;i++){
      out += words[i].substring(0, 1).toUpperCase();
      words[i] = words[i].substring(1, words[i].length-1);
      if(words[i].includes("-")){
        out+= words[i].split("-")[1].substring(0, 1).toUpperCase();
      }
      if(/([A-Z][a-z])/.test(words[i])){
        for(let x = 0; x< words[i].length;x++){
          if(words[i].charAt(x).toUpperCase() == words[i].charAt(x) && words[i].charAt(x+1).toUpperCase() != words[i].charAt(x+1)){
            out+= words[i].charAt(x).toUpperCase();
          }
        }
      }
    }
    return out;
  }
}
