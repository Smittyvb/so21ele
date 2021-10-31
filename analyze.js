const fs = require("fs");
const assert = require("assert").strict;
// lop off first 2 lines of metadata
let bltLines = fs.readFileSync(__dirname + "/results.blt", "utf-8").split("\n").slice(2);
let votes = [];
for (let i = 0; i < bltLines.length; i++) {
    const line = bltLines[i].trim();
    if (line === "0") break;
    assert(line.startsWith("1 "));
    votes.push(line.split(" ").slice(1, -1).map(x => parseInt(x, 10)));
    assert(votes[votes.length - 1].every(x => x !== 0));
}
console.log("Total votes:", votes.length);
console.log("Empty votes:", votes.filter(v => v.length === 0).length);
