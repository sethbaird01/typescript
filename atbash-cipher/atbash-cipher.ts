
export default class AtbashCipher{
    public alphabet = "abcdefghijklmnopqrstuvwxyz1234567890 ";
    public cipher = "zyxwvutsrqponmlkjihgfedcba1234567890 ";

    encode(strrIn: string):string{
        strrIn= strrIn.toLowerCase();
        strrIn= strrIn.replace(/ /g,'');
        strrIn= strrIn.replace(/\./g,'');
        strrIn= strrIn.replace(/,/g,'');
        let encoded:string[] = [];
        let outArr:string[] = [];
        for(let i = 0; i < strrIn.length;i++){
            encoded[i] = this.cipher[this.alphabet.indexOf(strrIn.charAt(i))];
        }
        for(let i = 0; i < encoded.length; i+= 5){
            let chunk:string[] = encoded.slice(i, i+5);
            let temp = chunk.toString().replace(/,/g,'');
            outArr.push(temp);
        }
       // outArr.push(encoded.slice((encoded.length-encoded.length%5),encoded.length).toString().replace(/,/g,''));
        let outstring = "";
        for(let i = 0; i<outArr.length;i++){
            outstring += outArr[i] + " ";
        }
        return outstring.trim();
    }

    decode(strrIn: string): string{
        let decoded = "";

        for(let i = 0; i < strrIn.length;i++){
            decoded += this.alphabet[this.cipher.indexOf(strrIn.charAt(i))].trim();
        }

        let temp: string = decoded.toString().replace(/,/g,'');
        return temp;
    }

}