const { arrayToColumn, arrayToValueAssign, arrayTOCSV, arrayToExpressionAssign, formatDate } = require('../src/includes/utility');
const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const { expect } = Code;
const { it } = exports.lab = Lab.script();

it('returns true when 1 + 1 equals 2', () => {

    expect(2).to.equal(2);
});

it('array to column converter', () => {
    const result = arrayToColumn(['one', 'two', 'three']);
    expect(result).to.equal('( one, two, three ) VALUES (?,?,?)');
})

it('array to value assignment', () => {
    const result = arrayToValueAssign(['one', 'two', 'three']);
    expect(result).to.equal('one=?,two=?,three=?');
})

it('array to csv', () => {
    const result = arrayTOCSV(['one', 'two', 'three']);
    expect(result).to.equal('one,two,three');
})

it('array to expression query assignment', () => {
    const result = arrayToExpressionAssign(['one', 'two', 'three'], ['AND', 'OR'], ['qwe', 'rty', 'uio']);
    expect(result).to.equal(" one = 'qwe' AND two = 'rty' OR three = 'uio'");
})

it('get only date from timestamp', () => {
    const result = formatDate('2001-08-12 23:38:14.492982');
    expect(result).to.equal('2001-08-12')
})