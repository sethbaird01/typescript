export default class ArmstrongNumbers {
    public static isArmstrongNumber(num: number): boolean{

        const numDigits: number = num.toString().length;
        let digits: number[] = [];

        for(let i = 0;i<numDigits;i++){
        digits[i] = Number(num.toString().charAt(i));            
        }

        let sum = 0;
        for(let i = 0;i<numDigits;i++){
            sum += (Math.pow(digits[i], numDigits));
        }

        if(sum == num){
            return true;
        }
        return false;
    }
}