var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {//황지훈 1cm
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
