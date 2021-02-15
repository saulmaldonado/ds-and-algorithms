/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const sbArr = new Array(numRows).fill(null).map(() => []);

  let i = 0;
  let j = 0;
  let n = s.length;
  let dir = -1;

  while (j < n) {
    const builder = sbArr[i];

    builder.push(s[j]);

    if (i === numRows - 1 || i === 0) {
      dir = -dir;
    }

    i += dir;

    j++;
  }

  const main = [];

  for (let i = 0; i < sbArr.length; i++) {
    main.push(sbArr[i].join(''));
  }

  return main.join('');
}
