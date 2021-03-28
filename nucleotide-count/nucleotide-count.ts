class NucleotideCount {
  static nucleotideCounts(strand: string): Record<string, number> {
    let a: number = 0;
    let c: number = 0;
    let g: number = 0;
    let t: number = 0;

    for(let i = 0;i<strand.length;i++){
      if(strand.charAt(i) == "A"){
        a++;
      }else if(strand.charAt(i) == "C"){
        c++;
      }else if(strand.charAt(i) == "G"){
        g++;
      }else if(strand.charAt(i) == "T"){
        t++;
      }else{
        throw new Error('Invalid nucleotide in strand');
      }
    }
    
    return {
      A: a,
      C: c,
      G: g,
      T: t,
    };
  }
}

export default NucleotideCount
