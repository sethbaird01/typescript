class SimpleCipher {
  private static alphabet = "abcdefghijklmnopqrstuvwxyz";
  public key = '';

  constructor(key: string = SimpleCipher.random100chars()) {

    if(key.length < 100){
      let newkey = "";
      for(let i =0;i<(150/key.length);i++){
        //to avoid problems with key being too short
        newkey += key;
      }
      this.key = newkey;
    }else{
      this.key = key;

    }
  }

  private static random100chars(): string{
    let out= "";
    for(let i = 0; i<100;i++){
      out += SimpleCipher.alphabet.charAt(Math.floor(Math.random() * 26));
    }
    return out;
  }

  encode(strrIn: string): string {
    let out = "";
    for(let i = 0; i<strrIn.length;i++){
      out += this.key.charAt(SimpleCipher.alphabet.indexOf(strrIn.charAt(i)));
    }
    return out;
  }

  decode(strrIn: string): string {
    let out = "";
    for(let i = 0; i<strrIn.length;i++){
      out += SimpleCipher.alphabet.charAt(this.key.indexOf(strrIn.charAt(i)));
    }
    return out;
  }


}

export default SimpleCipher
