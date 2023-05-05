//*********WEB SERVER QURISH ************** */

const express = require("express");
const app = express();
const http = require("http");
//1 KIRISH codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//2 Sessionga bogliq codelar
//3 Views codelar
app.set("views", "views");
app.set("views engine", "ejs");
//4Routing codelar
app.get("/hello", function (req, res) {
  res.end("<h1>Hello World</h1>");
});
app.get("/gift", function (req, res) {
  res.end(`<h1 style="background: red">Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfullyon port ${PORT}`);
});

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

// console.log(require("module").wrapper);

// let x = Math.floor(101 * Math.random());
// let moment = require("moment");

// setInterval(() => {
//   const time = moment().format();
//   console.log("ishga tushdim", time);
// }, 1000);

// setTimeout(() => {
//   const time2 = moment().format();
//   console.log("5chisekundda ishga tushdim", time2);
// }, 5000);

//40-sekundda ishga tushish kerak
// const schedule = require("node-schedule");
// schedule.scheduleJob("*/40 * * * * *", () => {
//   console.log("40chi sekundda ishga tushdim", moment().format("HH:mm:ss"));
// });

//****************************************************** */ */
//*******SINGLE THREAD VS MULTI PROCESS******************** */
//********************************************************* */

// let x = Math.floor(101 * Math.random());
// const schedule = require("node-schedule");
// const shell = require("shelljs");

// console.log(`ishga tushgan THREAD ${x}`);

// setInterval(() => {
//   console.log(`ishga tushdik: ${x}`);
// }, 1000);

// schedule.scheduleJob("*/15 * * * * *", () => {
//   shell.exec("node helper.js", { async: true });
// });
