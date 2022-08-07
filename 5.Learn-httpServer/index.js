const http = require("http");
const server = http.createServer((request, response) => {
  console.log("request.url", request.url);
  console.log("response.url", response);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port on 8000");
});
