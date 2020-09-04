'use strict'

exports.register = (server, options, next) => {
    server.route({
        method: "GET",
        path: "/pp",
        handler: (request, reply) => {
            reply("plugin path")
        }
    })
    console.log(options);

    next();
}


exports.register.attributes = {
    name: "my-custom-plugin",
    version: "1.0.0"
}