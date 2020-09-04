exports.arrayToColumn = function(array) {
    s = '';
    n = '';
    for (let i = 0; i < array.length; i++) {
        if (!(i === array.length - 1)) {
            s += " " + array[i] + ",";
            n += "?,"
        } else {
            s += " " + array[i] + " ";
            n += "?"
        }
    }
    return "(" + s + ")" + " VALUES " + "(" + n + ")";
}

exports.arrayToValueAssign = function(array) {
    s = '';
    for (let i = 0; i < array.length; i++) {
        if (!(i === array.length - 1)) {
            s += "" + array[i] + "=?,";
        } else {
            s += "" + array[i] + "=?";
        }
    }
    return s;
}

exports.arrayToExpressionAssign = function(col, exp, value) {
    s = '';
    for (let i = 0; i < col.length; i++) {
        if (!(i === col.length - 1)) {
            s += " " + col[i] + " = '" + value[i] + "' " + exp[i] + "";
        } else {
            s += " " + col[i] + " = '" + value[i] + "'";
        }
    }

    return s;
}

exports.arrayTOCSV = function(arr) {
    return arr.join(',');
}

exports.formatDate = function(date) {
    return (date.split(" ")[0]);
}