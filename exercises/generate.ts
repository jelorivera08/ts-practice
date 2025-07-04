function generate(numRows: number): number[][] {
  const rows: number[][] = [[1]];
  for (let i = 1; i < numRows; i++) {
    const previousRow = rows[i - 1];
    const paddedPreviousRow = [0, ...previousRow, 0];

    const newRow = paddedPreviousRow
      .map((v, i) => v + paddedPreviousRow[i + 1])
      .filter((v) => !Number.isNaN(v));

    rows.push(newRow);
  }

  return rows;
}
