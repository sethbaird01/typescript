import { stringify } from "querystring";

export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    this.colors = colors

    if(this.colors.length < 2){
      throw new Error('At least two colors need to be present');
      
          }
          
    }
  value = (): number => {

    if(this.colors.length < 2){
throw new Error('At least two colors need to be present');

    }

    if(this.colors.length >2){
      for(let ii: number = this.colors.length; ii > 1; ii--){
        delete this.colors[ii];
      }
    }

    let outstring: string = "";

    for(let i: number = 0; i < this.colors.length; i++){
      switch(this.colors[i] ){
                
          case "black": 
        outstring += "0"; 
        break;

          case "brown": 
        outstring += "1"; 
        break;

          case "red": 
        outstring += "2"; 
        break;

          case "orange": 
        outstring += "3"; 
        break;

          case "yellow": 
        outstring += "4"; 
        break;

          case "green": 
        outstring += "5"; 
        break;

          case "blue": 
        outstring += "6"; 
        break;

        case "violet": 
        outstring += "7"; 
        break;

          case "grey": 
        outstring += "8"; 
        break;

          case "white": 
        outstring += "9"; 
        break;

      }
    }
    return Number(outstring);

  
  }
}
