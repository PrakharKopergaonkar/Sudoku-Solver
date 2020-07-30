//Function that generated matrix
exports.generateMatrix = function(grid) {
        let matrix = new Array(9).fill(0).map(() => new Array(9).fill(0));
        for(let i = 0 ; i < matrix.length; i++) {
          for(let j = 0; j < matrix.length; j++) {
            matrix[i][j] = grid[9*i + j].value;
          }
        }
        return matrix
};

//Function that helps in checking placing a given number n in board[y][x] is safe or not
exports.solve = function(board,y,x,n) {
    for(let i=0; i<9 ; i++) {
        if(board[y][i]===n) {
          return false;
        }
      }
      for(let i=0;i<9;i++) {
        if(board[i][x]===n) {
          return false;
        }
      }
      let i1 = Math.floor(x/3)*3;
      let i2 = Math.floor(y/3)*3;
      for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
          if(board[i+i2][j+i1]===n) {
            return false
          }
        }
      }
      return true;
}

//Function that generates grid
exports.GenerateGrid = function(i,j,counter,puzzle) {
    let grid = []
    for(let row = 0 ; row < i; row++) {
        for(let columns = 0 ; columns < j; columns++) {
          grid.push({
            row,
            columns,
            value:puzzle[counter]
          })
          counter++;
        }
    }
    return grid
}
