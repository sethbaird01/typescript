export function isLeapYear(yearIn: number): boolean {
  if((yearIn%4 == 0 && yearIn %100 !=0) || yearIn%400==0){
return true;
  }
  return false;
}

