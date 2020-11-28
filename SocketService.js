var fs = require('fs');
var https = require('https');
var path = require('path');

class SocketService {

  constructor (app, port) {
    this.port = port;

    switch (process.env.NODE_ENV) {
      // Specify local certificate relative path
      case 'development':
        this.server =
          https.createServer({
            key: fs.readFileSync(
              path.resolve(process.env.SSL_DEV_KEY || './SSL/localhost.key')
            ),
            cert: fs.readFileSync(
              path.resolve(process.env.SSL_DEV_CRT || './SSL/localhost.crt')
            )
          }, app);
        break;

      default:
        this.server = https.createServer({
          key: fs.readFileSync(
            process.env.SSL_PDT_KEY || '/etc/nginx/SSL/domain.key'
          ),
          cert: fs.readFileSync(
            process.env.SSL_PDT_CRT || '/etc/nginx/SSL/domain.crt'
          ),
          ca: fs.readFileSync(
            process.env.SSL_PDT_CA || '/etc/nginx/SSL/domain.ca-bundle'
          ),
          requestCert: true,
          rejectUnauthorized: false
        }, app);
    }
  }

  initServer () {
    this.io = require('socket.io')(this.server);
    this.server.listen(this.port);
  }
}

module.exports = SocketService;