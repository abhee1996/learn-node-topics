const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //->Read data from a without stream:
  // fs.readFile("LearnStream.txt", (err, data) => {
  //   if (err) return console.error(err);
  //   console.log(data.toString());
  //   res.end(data.toString());
  // });
  // There are 2 ways to stream data
  // first way:
  // ->Reading from the stream
  // -> create a readable stream
  // -> Handle stream events -> (data,end,error,finish)

  //Code:
  const rStream = fs.createReadStream("LearnStream.txt");

  rStream.on("data", (chunkbychunkData) => {
    res.write(chunkbychunkData);
  });
  rStream.on("end", () => {
    res.end();
  });
  rStream.on("error", (err) => {
    console.log("err", err);
    res.end("file not found");
  });

  // second way:
  // we use single pipe() method for continous write and read the streaming of data
  // const rStream = fs.createReadStream("LearnStream.txt");

  // rStream.pipe(res);
});
server.listen(8000, "127.0.0.1");

//Reading from the stream
//-> create a readable stream
//-> Handle stream events -> (data,end,error,finish)
