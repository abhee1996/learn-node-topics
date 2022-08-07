//Example 1: Registering for the event to be fired only time using one event.
const EventsEmitter = require("events");
console.log("EventsEmitter", EventsEmitter);
const event = new EventsEmitter();
console.log("Event", event);
event.on("HelloWorld", () => {
  console.log("Hello My name is abdullah");
});

// Example 2: Create an event emit instance and use it to register multi-callback events
//callback event
event.on("SpeakSomething", () => {
  console.log("Pakistan ZindaBad");
});
//callback event
event.on("SpeakSomething", () => {
  console.log("Imran Khan ZindaBad");
});
//callback event
event.on("SpeakSomething", () => {
  console.log("PakArmy ZindaBad");
});
//event.emit() is a event which is use to call multiple callback events.
event.emit("SpeakSomething");

//Example 3: Registering for the event with call-back parameters
event.on("DragonBalls", (s, m) => {
  console.log(`Status code is ${s}, and the page is ${m}`);
});

event.emit("DragonBalls", 200, "found successfull");
