/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  const sb = [];

  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    let quotient = Math.floor(num / value);

    if (quotient > 0) {
      sb.push(roman[i].repeat(quotient));
      num %= quotient * value;
    }

    if (num === 0) {
      return sb.join('');
    }
  }
  return sb.join('');
}
