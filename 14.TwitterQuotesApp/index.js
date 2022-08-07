const fs = require("fs");
const readFile = fs.readFileSync("index.html", "utf-8");
const quotes = "https://type.fit/api/quotes";

const http = require("http");
const replaceVal = (tempVal, OrgVal) => {
  let twitter = tempVal.replace("{%quote%}", OrgVal.text);
  twitter = twitter.replace("{%author%}", OrgVal.author);
  return twitter;
};

const server = http.createServer((req, res) => {
  if ((req.url = "/q")) {
    requests(quotes)
      .on("data", (chunk) => {
        const ObjectData = JSON.parse(chunk);
        const ArrData = [ObjectData];
        // console.log(ArrData);
        const realTimeData = ArrData.map((val, i) => replaceVal(readFile, val)); //.join("");
        console.log("realTimeData", realTimeData);
        response.write(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        response.end();
      });
  }
});
server.listen(8000, "127.0.0.1");
