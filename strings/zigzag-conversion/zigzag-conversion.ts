function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const sbArr: string[][] = new Array(numRows).fill(null).map(() => []);

  let i: number = 0;
  let j: number = 0;
  let n: number = s.length;
  let dir: number = -1;

  while (j < n) {
    const builder: string[] = sbArr[i];

    builder.push(s[j]);

    if (i === numRows - 1 || i === 0) {
      dir = -dir;
    }

    i += dir;

    j++;
  }

  const main: string[] = [];

  for (let i = 0; i < sbArr.length; i++) {
    main.push(sbArr[i].join(''));
  }

  return main.join('');
}
