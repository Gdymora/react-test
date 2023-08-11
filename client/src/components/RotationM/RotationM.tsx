export function RotationM(): JSX.Element {
  const rotateMatrix = (matrix: Array<Array<number>>) => {
    const n = matrix.length;
    const rotatedMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // Создаем матрицу rotatedMatrix размером n x n и заполняем ее нулями

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotatedMatrix[j][n - 1 - i] = matrix[i][j];
        // Выполняем поворот элемента исходной матрицы на 90 градусов
        /* j - это текущий столбец в повернутой матрице.
           n - 1 - i - текущая строка в повернутой матрице 
           чтобы выполнить поворот на 90 градусов вправо меняем местами строки и столбцы
         */
      }
    }
    return rotatedMatrix;
  };

  const inputMatrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];
  //
  const rotatedMatrix = rotateMatrix(inputMatrix);

  console.log('Input Matrix:');
  inputMatrix.map((row) => console.log(row.join(' ')));
  console.log('Rotated Matrix:');
  rotatedMatrix.map((row) => console.log(row.join(' ')));

  return <></>;
}
