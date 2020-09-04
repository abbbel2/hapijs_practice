const con = require('../includes/connection');
const util = require('../includes/utility');

var model = {};

model.getAllData = function(table, result) {
    con.query(`SELECT * FROM ${table}`, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

model.getSpecificData = function(table, specificArray, result) {
    var sa = util.arrayTOCSV(specificArray);
    con.query(`SELECT ${sa} FROM ${table}`, (err, res) => {
        if (err)
            result(null, err);
        result(null, res);
    })
}

model.getDataById = function(table, idColumn, id, result) {
    con.query(`SELECT * FROM ${table} WHERE ${idColumn}="${id}"`, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

model.addData = function(table, col_arr, val_arr, result) {
    var query = util.arrayToColumn(col_arr);
    var arr = Object.values(val_arr);
    con.query(`INSERT INTO ${table} ${query}`, val_arr, (err, res) => {
        if (err)
            result(null, err);
        result(null, res);
    })
}

model.updateData = function(table, col_arr, val_arr, id_column, id, result) {
    var query = util.arrayToValueAssign(col_arr);
    var arr = Object.values(val_arr);
    var n = [];
    val_arr.forEach(a => {
        n.push(a);
    })

    n.push(id);
    con.query(`UPDATE ${table} SET ${query} WHERE ${id_column}=?`, n, (err, res) => {
        if (err)
            result(null, err);
        result(null, res);
    })
}

model.deleteData = function(table, id_column, id, result) {
    con.query(`DELETE FROM ${table} WHERE ${id_column}=?`, id, (err, res) => {
        if (err)
            result(null, err);
        result(null, res);
    })
}

model.runQuery = function(query, result) {
    con.query(query, (err, res) => {
        if (err)
            result(null, err);
        result(null, res);
    })
}

model.getArrayData = function(table, column, result) {
    var arr_data = [];
    con.query(`SELECT ${column} from ${table}`, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            res.forEach(result => {
                arr_data.push(result[column]);
            })
        }
        result(null, arr_data);
    })
}

model.expressionModel = function(table, col, exp, value, result) {
    var arr = Object.values(value);
    var expression = util.arrayToExpressionAssign(col, exp, arr);
    con.query(`SELECT * FROM ${table} WHERE ${ expression}`, arr, (err, res) => {
        if (err)
            result(null, err);
        result(null, res);
    })
}


module.exports = model;