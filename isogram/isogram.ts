export default class Isogram {
  public static alphabet = "qwertyuiopasdfghjklzxcvbnm";
  
  static isIsogram(str: string): boolean {
    let alpha = this.alphabet;

    str = str.replace(/-/g, '');
    str = str.replace(/ /g, '');
    str = str.toLowerCase();

    for(let i = 0;i<str.length;i++){
      if(alpha.includes(str.charAt(i))){
        const regex = new RegExp(str.charAt(i), 'g')
        alpha = alpha.replace(regex, '');
      }else{
        return false;
      }
    }

    return true;
  }
}

