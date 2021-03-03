class Clock {

public time: number[] = [];

private validateTime(hourIn: number, minuteIn: number): number[]{
    while(hourIn >= 24 || hourIn < 0 || minuteIn >= 60 || minuteIn < 0){
        while(hourIn >= 24){
            hourIn -= 24;
        }

        while(hourIn < 0){
            hourIn += 24;
        }

        while(minuteIn >= 60){
            hourIn++;
            minuteIn -= 60;
        }

        while(minuteIn < 0){
            hourIn--;
            minuteIn += 60;
        }
    }
    return [hourIn, minuteIn];
}

constructor(hourIn: number, minuteIn: number = 0){
    this.time = this.validateTime(hourIn, minuteIn);
}

public toString(): string {
    let hourString: string = this.time[0].toString();
    let minuteString: string = this.time[1].toString();

    if(hourString.length < 2){
        hourString = "0" + hourString;
    }

    if(minuteString.length < 2){
        minuteString = "0" + minuteString;
    }

    return hourString+":"+minuteString;
}

public plus(minuteIn: number): string {
    this.time = this.validateTime(this.time[0], this.time[1]+minuteIn);
    return this.toString();
}

public minus(minuteIn: number): string {
    this.time = this.validateTime(this.time[0], this.time[1]-minuteIn);
    return this.toString();
}

public equals(clockIn: Clock): boolean{
    return this.toString() == clockIn.toString();
}
 

}
export default Clock;