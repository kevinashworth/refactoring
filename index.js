const invoices = require('./invoices')
const plays = require('./plays')

const statement = require('./statement')

console.log(statement(invoices[0], plays))