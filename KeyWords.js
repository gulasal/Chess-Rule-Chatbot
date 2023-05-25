

//
let q = "";
function yes_no(ans){

}
let yesno = ["can", "does", "will", "should", "could", "would", "did"];
let subject = ["king", "queen", "bishop", "knight", "castle"];
let query = ["how", "why", "when", "what"];
let operator = ["move"];

/**const fs = require('fs');
const readline = require('readline');

async function searchFile(file, keywords) {
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let results = [];
    for await (const line of rl) {
        let found = true;
        for (let keyword of keywords) {
            if (!line.includes(keyword)) {
                found = false;
                break;
            }
        }
        if (found) {
            results.push(line);
        }
    }
    return results;
}

searchFile('example.txt', ['keyword1', 'keyword2']).then(results => {
    console.log(results);
});*/

/***async function searchFile(file, keywords) {
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let results = [];
    for await (const line of rl) {
        let count = 0;
        for (let keyword of keywords) {
            if (line.includes(keyword)) {
                count++;
            }
        }
        if (count > 0) {
            results.push({line: line, count: count});
        }
    }
    results.sort((a, b) => b.count - a.count);
    return results.map(result => result.line);
}

searchFile('example.txt', ['keyword1', 'keyword2']).then(results => {
    console.log(results);
});*/