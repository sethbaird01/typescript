import { stringify } from "querystring";
import { isatty } from "tty";
import { isMainThread } from "worker_threads";

class Bob {
  hey(strIn: string): string {
    
    //removing whitespace
    strIn = strIn.replace(/\s+/g, "");

    let isQuestion: boolean = (strIn.charAt(strIn.length - 1) == '?');

    //modified: checks if all LETTERS are caps
    let strJustASCII: string = strIn.replace(/[^A-z]/g, "");
    let isAllCaps: boolean = (strJustASCII != "" && strJustASCII == strJustASCII.toUpperCase());
    
    if(strIn == ""){
      return 'Fine. Be that way!';
    }

    if(isQuestion && !isAllCaps){
      return 'Sure.';
    }

    if(isAllCaps && !isQuestion){
      console.log(strIn);
      return 'Whoa, chill out!';
    }

    if(isQuestion && isAllCaps){
      return "Calm down, I know what I'm doing!";
    }

    return 'Whatever.';
  }
}

export default Bob
