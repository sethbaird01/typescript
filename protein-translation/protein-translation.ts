class ProteinTranslation {
  static proteins(strIn: string): string[] {
    let codonArray: string[] = [];
    let proteinArray: string[] = [];
    let count = 0;
    for(let x = 0; x<strIn.length;x++){
      if(x%3 == 0){
        //codon start index
        codonArray[count] = strIn.slice(x, x+3);
        //console.log(strIn.slice(x, x+2)+", index="+count+", x= "+x);
        count++;
      }
    }

    for(let x = 0 ;x<codonArray.length;x++){
      if(codonArray[x] == undefined){
        codonArray.splice(x, 1);
      }
  } 

    for(let x = 0 ;x<codonArray.length;x++){
      if(codonArray[x] == "AUG"){
        proteinArray[x] = "Methionine";
      }else
      if(codonArray[x] == "UUU" || codonArray[x] == "UUC"){
        proteinArray[x] = "Phenylalanine";
      }else
      if(codonArray[x] == "UUA" || codonArray[x] == "UUG"){
        proteinArray[x] = "Leucine";
      }else
      if(codonArray[x] == "UCU" || codonArray[x] == "UCC" || codonArray[x] == "UCA" || codonArray[x] == "UCG"){
        proteinArray[x] = "Serine";
      }else
      if(codonArray[x] == "UAU" || codonArray[x] == "UAC"){
        proteinArray[x] = "Tyrosine";
      }else
      if(codonArray[x] == "UGU" || codonArray[x] == "UGC"){
        proteinArray[x] = "Cysteine";
      }else
      if(codonArray[x] == "UGG"){
        proteinArray[x] = "Tryptophan";
      }else
      if(codonArray[x] == "UAA" || codonArray[x] == "UAG" || codonArray[x] == "UGA"){
        //stop codon
        //console.log("aborting, last codon: "+codonArray[x-1]);
    return proteinArray;
        }
    }
    return proteinArray;
  }

}

export default ProteinTranslation
