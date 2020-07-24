// As the same in the previous kata, String.prototype.repeat is disabled. Additionally, String.prototype.padStart/String.prototype.padEnd are disabled as well, and as your code must be warlord-compliant, the following rules and tests are also enforced:
// Total characters <= 100
// The combined total amount of characters + and $ in your submission must be 2 or less
// words for/if/while/forEach/reduce/next are not allowed anywhere in your submission
// Array object has been disabled. Any usage of characters [] is also disallowed

// const chirp = n => n === 1 ? 'chirp' : 'chirp-' + chirp(n - 1);
// const chirp = (n, m = {1:'chirp'}) => m[n] || (m[n] = chirp(n - 1, m) + '-chirp');
// const chirp = (n, s = 'chirp') => n === 1 ? s : chirp(n-1, s+'-chirp');

// const chirp=n=>n==0?'':n==1?'chirp':chirp(Math.floor(n / 2))+'-'+chirp(Math.ceil(n / 2))
const chirp = n => n > 1 ? chirp(n / 2)+ '-' + chirp((n-1)/2) : 'chirp';
const chirp = (n, s='-chirp') => s.length<n*6 ? chirp(n, s+s): s.slice(1,n*6);

// console.log(chirp(2));


