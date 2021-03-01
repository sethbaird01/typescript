export default class Robot {

  //global static variables
public static listAllPossibleNames: string[] = [];
public static listAllPossible3DigitNumbers: string[] = [];
public static listAllPossible2LetterStrings: string[] = [];

//name of robot [ object ]
public robotName: string = "";

//initialize the robot's name when object is created
  constructor() {
Robot.releaseNames(); 
this.resetName();    
  }

  //returns the number of digits in a number
  private digits_count(n: number): number {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }

  //fills static array with numbers 000-999
public static generateNumList(): void {
  let i_string: string = "";
for (let i = 0; i < 1000; i++) {
  if(i< 100){
    i_string = i + "00";
  }else{
    i_string = i + "";
  }
  Robot.listAllPossible3DigitNumbers[i] = i_string;
}
}

//fills static array with strings AA-ZZ
public static generateStringList(): void {
    let alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let count: number = 0;
for (let i = 0; i < alphabet.length ; i++) {
  for (let a = 0; a < alphabet.length ; a++) {
  Robot.listAllPossible2LetterStrings[count] = alphabet[i] + alphabet[a];
  count++;
}}}

//combines last two functions, so AA000 - ZZ999
public static generatePossibleNames(): void{
  let count: number = 0;
  for (let i = 0; i < Robot.listAllPossible2LetterStrings.length ; i++) {
    for (let a = 0; a < Robot.listAllPossible3DigitNumbers.length ; a++) {
    Robot.listAllPossibleNames[count] = Robot.listAllPossible2LetterStrings[i] + Robot.listAllPossible3DigitNumbers[a];
    count++;
  }}}

  //returns this robot [ object ]'s name
  public get name(): string {
    return this.robotName;
  }

  //generates a name based off static variable, then removes the name from array so as not to duplicate it
  public resetName(): void {
    let randomIndex: number = Math.floor(Math.random() * Robot.listAllPossibleNames.length);
    this.robotName = Robot.listAllPossibleNames.splice(randomIndex, 1)[0];
  }

  //fills the static variables
  public static releaseNames(): void {
    this.generateNumList();
    this.generateStringList();
    this.generatePossibleNames();
  }
}

