import "dotenv/config";
import http from "http";

// import https from "https"

import app from "./app.js"

const serverHTTP = http.createServer(app);

serverHTTP.listen(process.env.PORT, () => {

  console.log("A API está funcionando no endereço http://localhost:8000");
});

