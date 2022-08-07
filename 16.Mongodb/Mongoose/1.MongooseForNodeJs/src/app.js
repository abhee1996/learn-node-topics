const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mabdullahdev", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfull connected...");
  })
  .catch((err) => console.log(err));
//   schema is also Documents(fields of a tables)
//-> mongoose define the structure of the documents, default values and validators etc.
//-> mongoose schema tells the mongo db that this name field should that this value ,should tells the datatype and should be validated

// _id  62a1d13612377ca005322ff1     -> this is id ,should be unique , integer
//
// name        "Muhammad Umer"       ->this is name , should be string value ,validators
const abdullahSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  city: String,
  profession: String,
  created_date: { type: Date, default: Date.now },
  active: Boolean,
  alive: Boolean,
});
//model -->model is also a collection (Table)
// a model is always a class
const AbdullahModels = new mongoose.model("Record", abdullahSchema);
// console.log("AbdullahModels", AbdullahModels);
//create/insert first document
const createFirstRecord = async () => {
  try {
    const reactDocs = new AbdullahModels({
      name: "Muhammad Hafeez",
      age: 25,
      city: "Lahore",
      profession: "Full Stack Developer",
      active: true,
      alive: true,
    });
    const reactDocs1 = new AbdullahModels({
      name: "Amir",
      age: 25,
      city: "Lahore",
      profession: "Front End Developer",
      active: true,
      alive: true,
    });
    const reactDocs2 = new AbdullahModels({
      name: "Mahin",
      age: 25,
      city: "Lahore",
      profession: "Jsp Developer",
      active: true,
      alive: true,
    });
    const reactDocs3 = new AbdullahModels({
      name: "Usman",
      age: 25,
      city: "Lahore",
      profession: "Java Developer",
      active: true,
      alive: true,
    });
    // const result = await AbdullahModels.insertMany([
    //   reactDocs,
    //   reactDocs1,
    //   reactDocs2,
    //   reactDocs3,
    // ]);
  } catch (error) {
    console.log(error);
  }
};
createFirstRecord();
// Read data
let getDataId = "";
const getData = async () => {
  try {
    // const readData = AbdullahModels.find({ age: 25 })
    // .sort("name:1")
    // .limit(1);
    // .select({
    // name: 1,
    // })
    // .limit(1);

    // QUERY OPERATORS IN MONGODB
    //-> $gt - greater than
    // .find({ age: { $gt: 25 } });

    //-> $gte -  greater than equal to
    // .find({ age: { $gte: 25 } });

    //-> $eq - equal to
    // .find({ age: { $eq: 25 } });

    //-> $in - value in a array
    // .find({ city: { $in: ["Islamabad", "Karachi"] } });

    //-> $nin - not in an array
    // .find({ city: { $nin: ["Islamabad", "Karachi"] } });
    //LOGICAL QUERY OPERATORS IN MONGODB
    //-> $or - expression 1 or expression 2 in an array
    // .find({ $or: [{ city: "Islamabad" }, { age: { $gte: 26 } }] });
    //-> $and - expression 1 and expression 2 both are in an array
    // .find({ $and: [{ city: "Islamabad" }, { age: { $gt: 24 } }] });
    //-> $not - expression 1 not /not less than/not greater than/ in an array
    // .find({ age: { $not: { $gt: 24 } } });

    //-> $nor - expression 1 nor /nor less than/nor greater than/ in an array
    // .find({ $nor: [{ age: 26 }, { city: "Lahore" }, { active: false }] });

    ///SORT and COunt Sort
    // .find({ age: 25 })
    // .sort("name:1")
    // .limit(1);
    // .find({ age: 25 })
    // .sort("name:1").countDocuments();;
    // const dataId = readData[0]?._id?.toString();
    const readData = await AbdullahModels.find({ age: 25 })
      // .select({ name: 1 })
      .sort({ name: 1 })
      .limit(1);

    console.log("sort readData", readData[0]?._id?.toString());

    getDataId = readData[0]?._id?.toString();
    console.log("getDataId", getDataId);
    return getDataId;
  } catch (error) {
    console.log(error);
  }
};

getData();
console.log("getData_id", getDataId);
//Update document
//updateOne()
const updateRecord = async (getId) => {
  console.log("updateRecord getDataId", getId);
  try {
    if (getId !== "") {
      const result = await AbdullahModels.updateOne(
        { _id: getId },
        {
          $set: {
            name: "Ali Bin Jamil",
          },
        }
      );
      console.log("result", result);
    }
  } catch (error) {
    console.log(error);
  }
};

// updateRecord("62a20afe478888c779b9382e");
//UpdateMany
//updateMany()

const updatemoreData = async (getCity) => {
  try {
    if (getCity !== "") {
      const result = await AbdullahModels.updateMany(
        { city: getCity },
        {
          $set: {
            age: 40,
          },
        }
      );
      console.log("result", result);
    }
  } catch (error) {
    console.log(error);
  }
};
// updatemoreData("Karachi");

//DELETE
const deleteDoc = async (getCity) => {
  try {
    if (getCity !== "") {
      const result = await AbdullahModels.deleteOne({ city: getCity });
      console.log("result", result);
    }
  } catch (error) {
    console.log(error);
  }
};
// deleteDoc("Attock");

// DELETE MULTIPLE
const deleteMultiDoc = async (getCity) => {
  try {
    if (getCity !== "") {
      const result = await AbdullahModels.deleteMany({ city: getCity });
      console.log("result", result);
    }
  } catch (error) {
    console.log(error);
  }
};
// deleteMultiDoc("Karachi");
