class Matrix {

  public columns: any[] = [];
  public rows: any[] = [];

  constructor(matrixString: string) {
    var matrix: number[][] = [];

    let numRows = matrixString.split("\n").length;

    for(let currRow: number = 0;currRow<numRows;currRow++){
      let currRowContent:string = matrixString.split("\n")[currRow];
      let numCols: number = currRowContent.split(" ").length;
      matrix[currRow] = [];
      for(let currCol: number = 0;currCol<numCols;currCol++){

        let currColContent:string = currRowContent.split(" ")[currCol];
        matrix[currRow][currCol] = parseInt(currColContent);
      }

    }

    //matrix is saved and extracted from text input now

    //setting rows
    for(let i: number = 0;i<matrix.length;i++){
      this.rows[i] = matrix[i];
    }

    //thought process:
//temp[0] = matrix[0][0]
//temp[1] = matrix[1][0]
//temp[2] = matrix[2][0]

//therefore, temp[b] = matrix[b][a]
//when a iterates, make new temp array
//when a iterates, this.columns[a] = temp

    //setting columns

    console.log(matrix);

    for(let a: number = 0;a<matrix.length;a++){
      let temp: number[] = [];
      for(let b: number = 0;b<matrix[a].length;b++){
        if(matrix[b][a] != undefined){
        temp[b] = matrix[b][a];
      }
      }
      console.log(temp);
      this.columns[a] = temp;
    }

  }
}

export default Matrix
