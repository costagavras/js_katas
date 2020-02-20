// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. 
// He wants to keep his old car until he can buy the secondhand one.
// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. 
// Furthermore this percent of loss increases of 0.5 percent at the end of every two months.
// Can you help him? How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

// parameter (positive int or float, guaranteed) startPriceOld (Old car price)
// parameter (positive int or float, guaranteed) startPriceNew (New car price)
// parameter (positive int or float, guaranteed) savingperMonth 
// parameter (positive float or int, guaranteed) percentLossByMonth

// nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
  let carPriceDiff = startPriceNew - startPriceOld;
  if (carPriceDiff <= 0) {
    return [ 0 , Math.abs(carPriceDiff) ];
  } else {
    for (let month = 1; month <= 100; month++) {
      if (month % 2 == 0) percentLossByMonth += 0.5;
      carPriceDiff = carPriceDiff * (1 - percentLossByMonth / 100)
      let sumneeded = carPriceDiff -  savingperMonth * month;
      if (sumneeded < 0) {
        // return `The man will need ${month} months and he will have $${-Math.round(sumneeded)} left`;
        return [ month, Math.round(-sumneeded) ];
      }
    } 
  }
}

// function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
//   var months = 0, moneySaved = 0;
//   while (startPriceNew > startPriceOld + moneySaved){
//     moneySaved += savingperMonth;
//     startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
//     console.log(startPriceOld);
//     startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
//     console.log(startPriceNew);
//     months++;
//     if (months % 2 == 1){
//       percentLossByMonth += .5;
//     }
//   }
//   return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
// }

console.log(nbMonths(2000, 8000, 1000, 1.5));