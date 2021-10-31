const fs = require("fs");
const assert = require("assert").strict;
// lop off first 2 lines of metadata
let bltLines = fs.readFileSync(__dirname + "/opavote.blt", "utf-8").split("\n").slice(2);
for (let i = 0; i < bltLines.length; i++) {
    const line = bltLines[i].trim();
    if (line === "0") break;
    const weight = parseInt(line.split(" ")[0], 10);
    const vote = line.split(" ").slice(1, -1).map(x => parseInt(x, 10));
    for (let i = 0; i < weight; i++) {
        console.log("1 " + vote.join(" ") + " 0");
    }
}
