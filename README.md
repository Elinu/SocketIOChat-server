# A Server Implementation For SocketIOChat Project

## Upated
- add TLS/SSL support

## Usage
create and import your own certificate to `./SSL` directory, then update `SocketService.js` implementation.
```js
this.server =
          https.createServer({
            key: fs.readFileSync(
              path.resolve(process.env.SSL_DEV_KEY || './SSL/your.key')
            ),
            cert: fs.readFileSync(
              path.resolve(process.env.SSL_DEV_CRT || './SSL/your.crt')
            )
          }, app);
```
`SocketService.js` reference from [this](https://medium.com/better-programming/secure-websockets-with-express-and-socket-io-d9a0976c1427)

For more details, please see [original repo](https://github.com/appcoda/SocketIOChat)