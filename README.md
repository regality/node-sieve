Sieve of Eratosthenes
==========

This is an implementation of the sieve of Eratosthenes.
It finds prime numbers for you.

## Install

`npm install sieve`

## Usage

```javascript
var sieve = require('sieve');

// primes from 2 to 1000000
var primes = sieve(1000000);

// primes from 100 to 1000000
var primes = sieve(1000000, 100);
```

The sieve returns a Uint32Array, unless you are using a terrible browser,
in which case you just get an ordinary array.

## Perfomance

On my macbook pro, it found all primes from 2 to 100,000,000 in 2723ms.

It has memory issues with arrays much larger than that. If that is a
problem, submit a pull request.
