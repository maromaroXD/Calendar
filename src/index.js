"use strict";
const server  = require('./server');

const runServer  = async () => {
  try {
    const conf  = {
      host : "localhost",
      port : 8080
    };
    const app = await server(conf);
    await app.start();
    console.log(`Server running at http://${ config.host }:${ config.port }`);
  } catch (e) {
    console.log("Start Up error", err);
  }
};

runServer();