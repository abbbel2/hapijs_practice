const connection = require('../src/includes/connection');
const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const { expect } = Code;
const { it } = exports.lab = Lab.script();

it('Check connection test', () => {
    expect(connection.errno).to.equal();
})