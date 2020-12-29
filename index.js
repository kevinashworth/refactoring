const invoices = require('./invoices');
const plays = require('./plays');

const statement = require('./statement').statement;
const htmlStatement = require('./statement').htmlStatement;

console.log(statement(invoices[0], plays));
console.log(htmlStatement(invoices[0], plays));
