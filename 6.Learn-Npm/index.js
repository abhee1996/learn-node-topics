import chalk from "chalk";
import validator from "validator";
const log = console.log;
log(chalk.green.italic.underline.inverse("hello world"));
const res = validator.isBoolean("masq308@gmail.com");
log(
  res
    ? chalk.green.italic.underline.inverse(res)
    : chalk.red.italic.underline.inverse(res)
);
// // Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// // Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// // Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// // Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// // Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// // ES2015 template literal
log(`
${chalk.red("CPU")}: ${chalk.red("90%")}
${chalk.red("RAddM")}: ${chalk.green("40%")}
${chalk.red("DISK")}: ${chalk.yellow("70%")}
`);

// // Use RGB colors in terdminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
// log(chalk.hex("#DEADED").bold("Bold gray!"));
