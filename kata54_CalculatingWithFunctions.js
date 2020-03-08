// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy.
// ThereEach calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:

// seven(times(five())); // must return 35
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero() {}
function one() {}
function two() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}

// ===========================

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }

// ===========================

'zero one two three four five six seven eight nine'.split(' ').forEach(
  (mth, num) => this[mth] = (f = val => val) => f(num) 
)

let plus      = (r) => (l) => l + r
let minus     = (r) => (l) => l - r
let times     = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / 

// (f= val => val) => f(num) f = val => val f as param passed into this[mth]
// if f doesn't exist, f = val => val, return f(num) === num
// else use f and return f(num)

// four(plus(nine())); // must return 13
// ===========================

function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}}