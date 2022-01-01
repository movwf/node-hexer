const { argv } = require("process");
const parser = require("./parser");

(() => {
  const inPrefix = "-in";
  const outPrefix = "-out";

  const { 2: inParam, 4: outParam, 3: inFile, 5: outFile } = argv;

  if (inParam && inParam === inPrefix && inFile) {
    // Argument Style
    if (outParam && outParam === outPrefix && outFile) {
      parser(inFile, outFile);
    } else {
      parser(inFile, inFile + ".out");
    }
  } else {
    // Console stdin
    // stdin.addListener("data", (d) => {
    //   console.log(d.toString());
    // });

    // TODO: Style
    console.log("Still in development");
    console.log("Please provide in/out arguments to script.");
  }
})();
