
function make_move(move, board){
    if (check_valid(move, board)){

    }
}

function check_valid(move){

    return true;
}

function make_board(){
    board = {};
    i = 1;
    while (i <= 8) {
        board["a" + i] = "";
        board["b" + i] = "";
        board["c" + i] = "";
        board["d" + i] = "";
        board["e" + i] = "";
        board["f" + i] = "";
        board["g" + i] = "";
        board["h" + i] = "";
        i++;
    }
    board["valid"] = true;
    return board;
}



/*const fs = require('fs');
let rawdata = fs.readFileSync('pieces.json');
let data = JSON.parse(rawdata);
whit = data.White.King
console.log(whit)

let add_new_rules = function(rule_title, rule) {
    let jsonData = JSON.stringify({rule_title : rule });
    fs.appendFileSync('Rules.json', jsonData)
}
*/