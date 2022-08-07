const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  const data = fs.readFileSync("API.json", "UTF-8");
  const JSONToObj = JSON.parse(data);
  // console.log("__dirname", __dirname);

  if (request.url == "/postapi") {
    response.writeHead(200, { "Content-Type": "application/json" });

    response.end(JSONToObj[3].title);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("No post found");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port on 8000");
});
