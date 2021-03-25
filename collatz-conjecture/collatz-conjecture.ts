class CollatzConjecture {
  static steps(numIn: number): number {
    let steps = 0;
    if(numIn <= 0){
      throw new Error('Only positive numbers are allowed');
    }
    while(numIn != 1){
      if(numIn %2 == 0){
        //n is even
        numIn /= 2;
      }else{
        //n is odd
        numIn = (numIn*3)+1;
      }
      steps++;
    }
    return steps;
  }
}

export default CollatzConjecture
