export const colorCode = (inStr: string): number => {

  let outNum: number = 0;

//basically direct copy from resistor-color-duo :/

    switch(inStr){
              
        case "black": 
      outNum = 0; 
      break;

        case "brown": 
      outNum = 1; 
      break;

        case "red": 
      outNum = 2; 
      break;

        case "orange": 
      outNum = 3; 
      break;

        case "yellow": 
      outNum = 4; 
      break;

        case "green": 
      outNum = 5; 
      break;

        case "blue": 
      outNum = 6; 
      break;

      case "violet": 
      outNum = 7; 
      break;

        case "grey": 
      outNum = 8; 
      break;

        case "white": 
      outNum = 9; 
      break;

    }

    return outNum;
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
