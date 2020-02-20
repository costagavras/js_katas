//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
// There is a queue for the self-checkout tills at the supermarket.
// Your task is write a function to calculate the total time required for all the customers to check out!

function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  }
  var queues = [];
  var minCustomerPos;
  for (var i = 0; i < customers.length; i++) {
    if (i < n) {
      queues.push(customers[i]);
    } else {
      minCustomerPos = queues.indexOf(Math.min(...queues));
      queues[minCustomerPos] += customers[i];
    }
  }
  return Math.max(...queues);
}

console.log(queueTime([], 1));
console.log(queueTime([1,2,3,4], 2));

function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

function queueTime(customers, n) {
  let tills = Array(n).fill(0);

  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills))
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}

function queueTime(customers, n) {

  return Math.max(...(customers.reduce((prev, next) => {
    prev[prev.indexOf(Math.min(...prev))] += next;
    return prev;
  }, Array(n).fill(0))));
}
