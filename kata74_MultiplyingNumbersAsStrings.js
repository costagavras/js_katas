// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

function multiply(a, b) {
  let frst = a.split('').reverse(), snd = b.split('').reverse(), result = [];
  for(let i = 0; i < frst.length; i++)
    for (let j = 0; j < snd.length; j++) {
      let prod = frst[i] * snd[j];
      result[i + j] = result[i + j] || 0;
      result[i + j] += prod;
    }
  let lg = result.length;
  for(let k = 0; k < lg; k++) {
    let r = Math.floor(result[k] / 10);
    result[k] = result[k] % 10;
    result[k + 1] = result[k + 1] || 0;
    result[k + 1] += r;
  }
  return result.reverse().join('').replace(/^0+(?=\d)/g, '');
}

console.log(multiply("900719922324", "9007199212314"));