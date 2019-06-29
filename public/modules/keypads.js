//TODO
var key_pad_container;
var button_keypad_array;
var keep_column = [];
var symbols_array = [];

function display_keypads_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("keypads-modal").classList.remove("hidden");
    key_pad_container = document.getElementsByClassName("keypad-container")[0];
    button_keypad_array = key_pad_container.querySelectorAll("button");
}

function hide_keypads_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("keypads-modal").classList.add("hidden");
}

function reset_keypad_buttons() {
    for (var k = 0; k < button_keypad_array.length; k++) {
        button_keypad_array[k].style.visibility = "visible";
    }
}

var array_of_symbols = [
    ["koppa", "little_yus", "lambda", "kappa", "big_yus", "kai", "reversed_sigma"],
    ["e", "koppa", "reversed_sigma", "ha", "white_star", "kai", "query"],
    ["copyright", "buttcheeks", "ha", "zhe", "komi_dzje", "lambda", "white_star"],
    ["shima", "pilcrow", "yat", "big_yus", "zhe", "query", "teh"],
    ["psi", "teh", "yat", "sigma", "pilcrow", "ksi", "dark_star"],
    ["shima", "e", "thousand", "ae", "psi", "i", "omega"]
];

function check_keypads_event(e) {
    if (e.target.value === "done") {
        for (var i = 0; i < array_of_symbols.length; i++) {
            for (var j = 0; j < array_of_symbols[i].length; j++) {
                console.log(array_of_symbols[i][j]);
            }
        }
    } else {
        check_keypad_pressed(e);
    }
}

function not_in_keep_colum(q) {
    for (var i = 0; i < keep_column.length; i++) {
        if (keep_column[i].indexOf(q) != -1)
            return false;
    }
    return true;
}

function check_symbols() {
    if (symbols_array.length === 4) {
        for (var i = 0; i < symbols_array.length; i++) {

        }
    }
}

function check_keypad_pressed(e) {
    if (e.target.alt != undefined) {
        for (var i = 0; i < array_of_symbols.length; i++) {
            if (array_of_symbols[i].indexOf(e.target.alt) != -1) {
                keep_column.push(array_of_symbols[i]);
            }
        }
        for (var k = 0; k < button_keypad_array.length; k++) {
            if (not_in_keep_colum(button_keypad_array[k].value) || button_keypad_array[k].value === e.target.alt)
                button_keypad_array[k].style.visibility = "hidden";
        }
        symbols_array.push(e.target.alt);
        console.log(symbols_array);
        keep_column = [];
    }

    if (e.target.value === "undo") {
        symbols_array = [];
        keep_column = [];
        reset_keypad_buttons();
    }

    if (e.target.value === "cancel") {
        symbols_array = [];
        keep_column = [];
        reset_keypad_buttons();
        hide_keypads_module();
    }

    if (e.target.value === "done") {
        symbols_array = [];
        keep_column = [];
        modulesSolved++;
        reset_keypad_buttons();
        hide_keypads_module();
    }
}
