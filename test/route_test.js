const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../server');

describe('GET /all', () => {
    let server;
    beforeEach(async() => {
        server = await init();
    });

    afterEach(async() => {
        await server.stop();
    });

    it('responds with 200', async() => {
        const res = await server.inject({
            method: 'get',
            url: '/all'
        });
        expect(res.statusCode).to.equal(200);
    });
});

describe('GET /search', () => {
    let server;

    beforeEach(async() => {
        server = await init();
    });

    afterEach(async() => {
        await server.stop();
    });

    it('responds with 200', async() => {
        const res = await server.inject({
            method: 'get',
            url: '/search?date=2015-06-30'
        });
        expect(res.statusCode).to.equal(200);
    });
});


describe('POST /save', () => {
    let server;

    beforeEach(async() => {
        server = await init();
    });

    afterEach(async() => {
        await server.stop();
    });

    it('responds with 200', async() => {
        const res = await server.inject({
            method: 'post',
            url: '/save',
            payload: {
                "location": "sdfbjk",
                "timestamp": "2001-08-12 23:38:14.492982"
            }
        });
        expect(res.statusCode).to.equal(200);
    });
});