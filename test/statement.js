/* eslint-env mocha */
const assert = require('assert');

const invoices = require('../invoices');
const plays = require('../plays');

const statement = require('../statement');

describe('Invoice Statement', function () {
  describe('Invoice 0', function () {
    it('should return the expected statement', function () {
      const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;
      const invoice = statement(invoices[0], plays);
      assert.equal(invoice, expected);
    });
  });

  describe('Invoice 1', function () {
    it('should return the expected statement', function () {
      const expected = `Statement for BigCo2
  Hamlet: $1,200.00 (110 seats)
  As You Like It: $860.00 (70 seats)
  Othello: $900.00 (80 seats)
Amount owed is $2,960.00
You earned 184 credits
`;
      const invoice = statement(invoices[1], plays);
      assert.equal(invoice, expected);
    });
  });
});
