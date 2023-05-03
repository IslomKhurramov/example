// const moment = require("moment");
// const time = moment().format();
// console.log(time);

// const inquirer = require("inquirer");
// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting ?" }])
//   .then((answer) => {
//     console.log("man kiritgan raqam:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");
// console.log("test", test);

// const validator = require("validator");
// const test = validator.isInt("100");
// console.log("test", test);

// const validator = require("validator");
// const test = validator.isIP("119.197.158.37");
// console.log("test", test);

const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random", random);
const chalk = require("chalk");
const log = console.log;
log(chalk.blue("Hello") + random + chalk.red("!"));
