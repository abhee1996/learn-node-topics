const http = require("http");
const server = http.createServer((request, response) => {
  console.log("request.url", request.url);
  // console.log("response.url", response);
  if (request.url == "/") {
    response.writeHead(200);

    response.end("hi! I'm abdullah welcome from Nodejs website");
  } else if (request.url == "/about") {
    response.writeHead(200);

    response.end("This is my Abouts");
  } else if (request.url == "/contact") {
    response.writeHead(200, { "Content-Type": "application/json" });

    response.end("email : masq308@gmail.com");
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(" <h1> 404 error ,page not found </h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port on 8000");
});
