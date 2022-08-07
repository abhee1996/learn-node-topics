const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //second way:
  //we use single pipe() method for continous write and read the streaming of data
  const rStream = fs.createReadStream("LearnStream.txt");

  rStream.pipe(res);
});
server.listen(8000, "127.0.0.1");

//Reading from the stream
//-> create a readable stream
//-> Handle stream events -> (data,end,error,finish)
