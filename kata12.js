// Square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    var strNum = String(num);
    var sumSqD = "";
    for (var i = 0; i < strNum.length; i++) {
      var sqD = String(Math.pow(strNum[i],2));
      sumSqD += sqD;
    }
    return Number(sumSqD);
}

console.log(squareDigits(9119));

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}
