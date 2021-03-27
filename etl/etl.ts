const alphabet = "abcdefghijklmnopqrstuvwxyz";

function transform(inRec: Record<number, string[]>): Record<string, number> {
  
  let out: Record<string, number> = {};
  //ignore this red underline, eslint thinks it should be a const.

for(let i = 0; i<Object.values(inRec).length;i++){
  //i is traversing through all whole arrays
  for(let x = 0; x<Object.values(inRec)[i].length;x++){
    //x is traversing through the array's elements
    for(let y = 0;y<alphabet.length;y++){
      //y is traversing through the alphabet
      if(Object.values(inRec)[i][x].toLowerCase() == alphabet.charAt(y)){
        const currLetter: string = alphabet.charAt(y);
        const currPoints = Number(Object.keys(inRec)[i]);
        out[currLetter] = currPoints;
      }
    }
  }
  
}
return out;
}


export default transform
