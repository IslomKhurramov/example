let y = Math.floor(101 * Math.random());

setInterval(() => {
  console.log("ishga tushdik helperdan", y);
}, 1000);

setTimeout(() => {
  process.exit();
}, 5000);
