class School {


    //private variables bc extra poins :O
    private studentsCount: number = 0;
    private db: Set<any[]> = new Set();


    constructor(){

    }

    //adds student to database
    private addEntry( studentIn: string, gradeIn: number ){

        for (let i = 0; i < this.db.size; i++) {
            if(Array.from(this.getDB())[i][0] == studentIn){
                //db contains student already, find element and delete it.
                 this.db.delete(Array.from(this.getDB())[i]);
            }
        }

        this.db.add([studentIn, gradeIn]);
    }

    private getDB(): Set<any[]> {
        return this.db;
    }

    public addStudent( studentIn: string, gradeIn: number ){
        //not directly accesing local database for safety
        this.addEntry(studentIn, gradeIn);
    }

    public studentRoster(): Set<any[]> {

        let sortedSet: Set<any[]> = new Set();
        let grades: number[] = [];
        for (let i = 0; i < this.getDB().size; i++) {
            let currentGrade = Array.from(this.getDB())[i][1];
            if(!grades.includes(currentGrade)){
                grades.push(currentGrade);
            }
        }  
        grades.sort();
    
        //now grades are in order
        //time to add the respective students into a master Set

        for (let currentGradeIndex = 0; currentGradeIndex < grades.length; currentGradeIndex++) {
                let arrayOfStudentsInCurrentGrade: string[] = [];
                let count: number = 0;
           
                for(let count: number = 0; count<this.getDB().size;count++){
                    if(Array.from(this.getDB())[count][1] == grades[currentGradeIndex]){
                        arrayOfStudentsInCurrentGrade.push(Array.from(this.getDB())[count][0]);
                    }
                }
                //now list of students in current grade is full
                arrayOfStudentsInCurrentGrade.sort();
                for(let i: number = 0; i<arrayOfStudentsInCurrentGrade.length;i++){
                    sortedSet.add([arrayOfStudentsInCurrentGrade[i], grades[currentGradeIndex]]);
                }
                //now this grade and its students has been added to sortedSet
        }

        //now every grade has been added to sortedSet

        return sortedSet;
    }

    public studentsInGrade(gradeIn: number): string[] {
        let arrayOfStudentsInCurrentGrade: string[] = [];

       
            for(let count: number = 0; count<this.getDB().size;count++){
                if(Array.from(this.getDB())[count][1] == gradeIn){
                    arrayOfStudentsInCurrentGrade.push(Array.from(this.getDB())[count][0]);
                }
            
            //now list of students in current grade is full
            }
            arrayOfStudentsInCurrentGrade.sort();
          
  return arrayOfStudentsInCurrentGrade;
    
    }



}

export default School;