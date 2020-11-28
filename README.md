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

For more details, please see [original repo](https://github.com/appcoda/SocketIOChat)