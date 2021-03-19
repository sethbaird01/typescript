export default class Gigasecond {
  public thisdate: Date;
  constructor(dateIn: Date){
    this.thisdate = dateIn;
  }

  public date(): Date {
    return this.addMinutes(this.thisdate, (1000000000/60))
  }

  private addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes*60000);
}
}
