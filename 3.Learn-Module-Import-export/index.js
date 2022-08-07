const hello = () => {
  return "hello";
};
// module.exports.hello = hello;
function add(a, b) {
  return a + b;
}

module.exports = { add, hello };
