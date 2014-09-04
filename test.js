var numberSieve = require('./sieve')
  , test = require('tape')
  , fs = require('fs')
  , n = 100
  ;

test('sieve', function(t) {
    var res = numberSieve(n);
    if (process.env.UPDATE) fs.writeFileSync('./fixture/result.json', JSON.stringify(res));
    t.deepEqual(new Uint32Array(require('./fixture/result.json')), res);
    t.end();
});
