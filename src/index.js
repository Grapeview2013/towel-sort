
module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  let solution = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      solution = solution.concat(matrix[i]);
    } else {
      solution = solution.concat(matrix[i].reverse());
    }
  }

  return solution;
}

// This function first checks if the input matrix is valid (i.e., not null or empty),
// and returns an empty array if it's not valid.
// It then iterates through the rows of the matrix and alternates between
// appending each row to the solution array as is (for even rows) and appending the reversed row
// to the solution array (for odd rows). This creates the "towel" pattern where the elements in
// even rows are ordered from left to right and the elements in odd rows are ordered from right to left.
// Finally, the function returns the 1D array solution.
