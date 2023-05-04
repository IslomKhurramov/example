// const moment = require("moment");
// const time = moment().format();
// console.log(time);

const inquirer = require("inquirer");
inquirer
  .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting ?" }])
  .then((answer) => {
    console.log("man kiritgan raqam:", answer.raqam);
  })
  .catch((err) => console.log(err));

// const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");
// console.log("test", test);

// const validator = require("validator");
// const test = validator.isInt("100");
// console.log("test", test);

// const validator = require("validator");
// const test = validator.isIP("119.197.158.37");
// console.log("test", test);

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random", random);
// const chalk = require("chalk");
// const log = console.log;
// log(chalk.blue("Hello") + random + chalk.red("!"));

// *****FILE MODULE*********************************/

// const calculate = require("./hisob.js");
// const result = calculate.kopaytirish(80, 20);
// console.log(`reuslt1 ${result}`);

// const result2 = calculate.ayirish(80, 20);
// console.log(`reuslt2 ${result2}`);

// const result3 = calculate.qoshish(80, 20);
// console.log(`reuslt3 ${result3}`);

// const Account = require("./account");
// Account.tellMeAboutClass();
// Account.tellMeTime();
// console.log("**********************");
// const myAccount = new Account("Eric", 20000, 9878646548);
// myAccount.giveMeDetails();
// myAccount.makeDeposit(10000000);
// myAccount.withdraw(400000);
