export default class Luhn {
    public static valid(str: string): boolean {

        //removes spaces using regex
        str = str.replace(/\s/g, '');

        //length validation
        if(str.length <=1){
            return false;
        }

        //is number?
        if(isNaN(Number(str))){
            return false;
        }

        //actually validating
        let doubled = "";
        let sum = 0;
        let count = 0;
        for(let i = 0;i<str.length;i++){
            if(i % 2 == 0){
                if((Number(str.charAt(i)) * 2) > 9){
                    doubled += (Number(str.charAt(i)) * 2)-9;
                }else{
                    doubled += Number(str.charAt(i)) * 2;
                }
                sum += Number(doubled.charAt(count));
                count++;
            }
            else{
                sum += Number(str.charAt(i));
            }
        }

        if(sum%10 != 0){
            return false;
        }

        return true
    }
}