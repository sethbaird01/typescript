class HandShake {
    public binary: number;

    constructor(inC:number){
        this.binary = parseInt(inC.toString(2));
        console.log(`Number in: ${inC}, binary:${this.binary}`);
    }

    private decode(): string[]{
        let reverse = false;
        // eslint-disable-next-line prefer-const
        let actions: string[] = [];
        while((this.binary - 10000) >= 0){
            this.binary -= 10000;
            reverse = true;
        }
        while((this.binary - 1000) >= 0){
            this.binary -= 1000;
            actions.push("jump");
        }
        while((this.binary - 100) >= 0){
            this.binary -= 100;
            actions.push("close your eyes");
        }
        while((this.binary - 10) >= 0){
            this.binary -= 10;
            actions.push("double blink");
        }
        while((this.binary - 1) >= 0){
            this.binary -= 1;
            actions.push("wink");
        }  
        if(!reverse){
            actions.reverse();
        }
        return actions;
    }

    public commands(): string[] {
        return this.decode();
    }

}

export default HandShake;