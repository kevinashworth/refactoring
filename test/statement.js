/* eslint-env mocha */
const assert = require('assert');

const invoices = require('../src/data/invoices');
const plays = require('../src/data/plays');

const statement = require('../src/statement').statement;
const htmlStatement = require('../src/statement').htmlStatement;

describe('Invoice Statements', function () {
  describe('Invoice 0 (plain)', function () {
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

  describe('Invoice 1 (plain)', function () {
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
  describe('Invoice 0 (html)', function () {
    it('should return the expected statement', function () {
      const expected = `<h1>Statement for BigCo</h1>
<table>
  <tr><th>play</th><th>seats</th><th>cost</th></tr>
  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is $1,730.00</p>
<p>You earned 47 credits</p>
`;
      const invoice = htmlStatement(invoices[0], plays);
      assert.equal(invoice, expected);
    });
  });

  describe('Invoice 1 (html)', function () {
    it('should return the expected statement', function () {
      const expected = `<h1>Statement for BigCo2</h1>
<table>
  <tr><th>play</th><th>seats</th><th>cost</th></tr>
  <tr><td>Hamlet</td><td>110</td><td>$1,200.00</td></tr>
  <tr><td>As You Like It</td><td>70</td><td>$860.00</td></tr>
  <tr><td>Othello</td><td>80</td><td>$900.00</td></tr>
</table>
<p>Amount owed is $2,960.00</p>
<p>You earned 184 credits</p>
`;
      const invoice = htmlStatement(invoices[1], plays);
      assert.equal(invoice, expected);
    });
  });
});
