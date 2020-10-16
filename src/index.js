
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let final = []
if(matrix !== undefined){
  for(var i = 0; i < matrix.length; i++){
    if(i % 2 === 0){
      for(var k = 0; k < matrix[i].length; k++){
        final.push(matrix[i][k])
      }
    }
    else {
      var reversed = matrix[i].reverse()
      for(var k = 0; k < matrix[i].length; k++){
        final.push(reversed[k])
      }
    }
  }
  return final
}
else {
  return []
}
}