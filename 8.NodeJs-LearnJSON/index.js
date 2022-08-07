const fs = require("fs");
//Create Object
const data = {
  name: "Muhammad abdullah",
  age: 25,
  Profession: "Software Developer",
  City: "Lahore",
};

// const objectToJSON = JSON.stringify(data);
// console.log("objectToJSON", objectToJSON);
//create new file and add json data in it
// fs.writeFile("objectToJSON.json", objectToJSON, (err) => {
//   console.log(err);
// // });
// const JsonToOBJECT = JSON.parse(objectToJSON);
// console.log("JsonToOBJECT", JsonToOBJECT);

fs.readFile("objectToJSON.json", "utf-8", (err, data) => {
  console.log("data", data);
  const JsonToOBJECT = JSON.parse(data);

  console.log("JsonToOBJECT", JsonToOBJECT);
});
