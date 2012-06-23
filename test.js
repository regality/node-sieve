var numberSieve = require('./sieve')
  , n = 100000000
  ;

console.log('generating primes...');

console.time('primes generated in');
var primes = numberSieve(n);
console.timeEnd('primes generated in');

console.log('found ' + primes.length + ' primes');
console.log('largest prime found: ' + primes[primes.length - 1]);
