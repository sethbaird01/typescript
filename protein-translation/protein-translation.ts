class ProteinTranslation {
  static proteins(strIn: string): string[] {
    let codonArray: string[] = [];
    let proteinArray: string[] = [];
    for(let x = 0; x<(strIn.length/3);x = x+3){

              codonArray[x] = strIn.slice(x, x+3);

    }

    for(let x = 0 ;x<codonArray.length;x++){
      if(codonArray[x] == undefined){
        codonArray.splice(x, 1);
      }
}

    for(let x = 0 ;x<codonArray.length;x++){
      if(codonArray[x] == "AUG"){
        proteinArray[x] = "Methionine";
      }
      if(codonArray[x] == "UUU" || codonArray[x] == "UUC"){
        proteinArray[x] = "Phenylalanine";
      }
      if(codonArray[x] == "UUA" || codonArray[x] == "UUG"){
        proteinArray[x] = "Leucine";
      }
      if(codonArray[x] == "UCU" || codonArray[x] == "UCC" || codonArray[x] == "UCA" || codonArray[x] == "UCG"){
        proteinArray[x] = "Serine";
      }
      if(codonArray[x] == "UAU" || codonArray[x] == "UAC"){
        proteinArray[x] = "Tyrosine";
      }
      if(codonArray[x] == "UGU" || codonArray[x] == "UGC"){
        proteinArray[x] = "Cysteine";
      }
      if(codonArray[x] == "UGG"){
        proteinArray[x] = "Tryptophan";
      }
      if(codonArray[x] == "UAA" || codonArray[x] == "UAG" || codonArray[x] == "UGA"){
        //stop codon
    return proteinArray;
        }
    }
    return proteinArray;
  }

}

export default ProteinTranslation
