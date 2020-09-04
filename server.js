'use strict';

const Hapi = require('@hapi/hapi');
const location_routes = require('./src/routes/location_routes');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route(location_routes);

exports.init = async() => {

    await server.initialize();
    return server;
};

exports.start = async() => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    return server;
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});