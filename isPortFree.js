const net = require("net");

const isPortFree = async (port) => {
  return new Promise((resolve, reject) => {
    let isFree;
    const server = net.createServer();
    server.listen(port, function () {
      isFree = true;
      server.close();
    });
    server.on("error", function () {
      isFree = false;
      server.close();
    });
    server.on("close", function () {
      isFree ? resolve : reject;
    });
  });
};

async function checkPort(port) {
  let a = await isPortFree(port);
  console.log(`port is free ?? `, a);
}

checkPort(800);
