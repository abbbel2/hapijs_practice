const model = require('./src/model/index');

model.getArrayData("data", "location", (err, data) => {
    console.log(data);
})