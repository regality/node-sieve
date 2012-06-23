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
