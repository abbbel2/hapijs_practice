const dbModel = require('../model/index');
const { formatDate } = require('../includes/utility');

routes = [{
        method: "GET",
        path: "/all",
        handler: (request, h) => {
            return new Promise((resolve, reject) => {
                dbModel.getAllData("data", async(err, data) => {
                    if (err) reject(err);
                    resolve(h.response(data));
                })
            });
        }
    },
    {
        method: "GET",
        path: "/search",
        handler: (request, h) => {
            return new Promise((resolve, reject) => {
                dbModel.getAllData("data", async(err, data) => {
                    if (err) reject(err);
                    var date = request.query.date;
                    var result = []
                    data.map(d => {
                        if (formatDate(d.timestamp) === date)
                            result.push(d);
                    })
                    resolve(h.response(result[0]));
                })
            })
        }
    },
    {
        method: "POST",
        path: "/save",
        handler: (request, h) => {
            const payload = request.payload;
            return new Promise((resolve, reject) => {
                dbModel.addData("data", Object.keys(payload), Object.values(payload), (err, data) => {
                    if (err) reject(err);
                    resolve(h.response(data));
                })
            })
        }
    },
]

module.exports = routes;