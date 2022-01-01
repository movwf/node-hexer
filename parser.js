const fs = require("fs");

/**
 * Hex Parser
 * Parsing hex strings filled file into file itself.
 * @param {string} inFile Input File w/Extension (e.g in.txt)
 * @param {string} outFile Output File w/Extension (e.g out.txt)
 */
const parser = (inFile, outFile) => {
  console.log(`
===============================================
|       _         _          _    __   _   _  |
| |_|  |_  \\/    |_)   /\\   |_)  (_   |_  |_) |
| | |  |_  /\\    |    /--\\  | \\  __)  |_  | \\ |
|                                             |
| version 0.1.0                               |
|                                             |
|                                github/movwf |
===============================================`);

  console.log(`| File is parsing : ${inFile}`);
  fs.readFile(inFile, { encoding: "utf-8" }, (err, file) => {
    if (!err) {
      const buffer = Buffer.from(file, "hex");

      fs.writeFile(outFile, buffer, (err) => {
        if (!err) {
          console.log(`| File has created : ${outFile}`);
          console.log("===============================================");
        }
      });
    }
  });
};

module.exports = parser;
