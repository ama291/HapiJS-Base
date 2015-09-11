var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8888 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('public/index.html');
    }
});

server.route({
    method: 'GET',
    path: '/{param}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});