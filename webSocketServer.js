const http = require("http");
const WebSocketServer = require("websocket").server;
let sockets = {};

const httpServer = http.createServer((req, res) => {
  console.log("request received");
});

const webSocket = new WebSocketServer({
  httpServer: httpServer,
});

webSocket.on("request", (request) => {
  console.log(Object.keys(request));
  console.log(request);
  let connection = request.accept(null, request.origin);
  connection.on("open", (e) => console.log("opened !!!"));
  connection.on("close", (e) => console.log("closed !!!"));
  connection.on("message", (e) => {
    console.log(`Received message - ${e.utf8Data}`);
  });
});

httpServer.listen(8080, () => console.log("server listening on 8080"));
