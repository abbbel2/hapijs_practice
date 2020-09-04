const model = require('../src/model/index');
const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const { expect } = Code;
const { it } = exports.lab = Lab.script();

it("Fetch all data model test", () => {
    model.getAllData("data", (err, data) => {
        expect(data.errno).to.equal();
    })
})

it("fetch by id model test", () => {
    model.getDataById("data", (err, data) => {
        expect(data.errno).to.equal();
    })
})

it("update model test", () => {
    model.updateData("data", ['location'], ['Addis ababa'], ['id'], 1, (err, data) => {
        expect(data.errno).to.equal();
    })
})

it("delete model test", () => {
    model.deleteData("data", "id", 2, (err, data) => {
        expect(data.errno).to.equal();
    })
})

it("specific model test", () => {
    model.getSpecificData("data", ['timestamp'], (err, data) => {
        expect(data.errno).to.equal();
    })
})

it('add data model test', () => {
    model.addData("data", ["location", "timestamp"], ["AA", "test_timestamp"], (err, data) => {
        expect(data.errno).to.equal();
    })
})

it('Expression query model test', () => {
    model.expressionModel("data", ["location", "timestamp"], ["AND"], ["AA", "test_timestamp"], (err, data) => {
        expect(data.errno).to.equal();
    })
})

it("get single column array data test", () => {
    model.getArrayData("data", "location", (err, data) => {
        expect(data.errno).to.equal();
    })
})

it("running query test", () => {
    model.runQuery("SELECT * FROM data", (err, data) => {
        expect(data.errno).to.equal();
    })
})