export default class Triangle {
  sides: number[]

  constructor(a: number, b: number, c: number) {
    this.sides = [a,b,c];
  }

  kind(): string {

    let allEqual = true;

  for(let b = 0;b<this.sides.length;b++){
    for(let a = 0;a<this.sides.length;a++){
      if(this.sides[a] <= 0){
        throw new Error("Invalid Triangle");
      }

      if(this.sides[a] != this.sides[b]){
        //all elements unique
        allEqual = false;
      }
    }
   }
   
   if(!this.inequality()){
    throw new Error("not a triangle");
   }

   if((this.sides[0] == this.sides[1] && this.sides[1] != this.sides[2]) || (this.sides[1] == this.sides[2] && this.sides[2] != this.sides[0]) || (this.sides[0] == this.sides[2] && this.sides[2] != this.sides[1])){
    return "isosceles"
  }

   if(allEqual){
     return "equilateral"
   }

   if(!allEqual){
     return "scalene"
   }



  return "invalid";
  }

  // @returns false if not a triangle
  private inequality(): boolean {

        
    if(this.sides[0] > this.sides[1] + this.sides[2] || this.sides[1] > this.sides[0] + this.sides[2] || this.sides[2] > this.sides[0] + this.sides[1]){
      return false;
    }

    return true;
  }
}
