const fs = require("fs");

const parser = (inFile, outFile) => {
  fs.readFile(inFile, { encoding: "utf-8" }, (err, file) => {
    if (!err) {
      const buffer = Buffer.from(file, "hex");

      fs.writeFileSync(outFile, buffer);
    }
  });
};

module.exports = parser;
