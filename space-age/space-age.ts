class SpaceAge {
 public seconds: number;

public planetYearDiffArr: number[] = 
 [0.2408467, 0.61519726, 1.8808158, 11.862615, 29.447498, 84.016846, 164.79132];

constructor(seconds: number){
    this.seconds = seconds;


}

onEarth(): number{
let bigDecimal: number =  this.seconds/86400/365.25;
return Number.parseFloat(bigDecimal.toFixed(2));
}

onMercury(): number{
let bigDecimal: number =  (this.seconds/86400/365.25)/this.planetYearDiffArr[0];
return Number.parseFloat(bigDecimal.toFixed(2));
}

onVenus(): number{
let bigDecimal: number =  (this.seconds/86400/365.25)/this.planetYearDiffArr[1];
return Number.parseFloat(bigDecimal.toFixed(2));
}

onMars(): number{
let bigDecimal: number =  (this.seconds/86400/365.25)/this.planetYearDiffArr[2];
return Number.parseFloat(bigDecimal.toFixed(2));
}

onJupiter(): number{
let bigDecimal: number =  (this.seconds/86400/365.25)/this.planetYearDiffArr[3];
return Number.parseFloat(bigDecimal.toFixed(2));
}

onSaturn(): number{
let bigDecimal: number =  (this.seconds/86400/365.25)/this.planetYearDiffArr[4];
return Number.parseFloat(bigDecimal.toFixed(2));
}

onUranus(): number{
let bigDecimal: number =  (this.seconds/86400/365.25)/this.planetYearDiffArr[5];
return Number.parseFloat(bigDecimal.toFixed(2));
}

onNeptune(): number{
let bigDecimal: number =  (this.seconds/86400/365.25)/this.planetYearDiffArr[6];

return Number.parseFloat(bigDecimal.toFixed(2));
}

}
export default SpaceAge;
