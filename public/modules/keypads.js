//TODO
var key_pad_container;
var button_keypad_array;

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

var array_of_symbols = [
                    ["koppa", "little_yus", "lambda", "kappa", "big_yus", "kai", "reversed_sigma"],
                    ["e", "koppa", "reversed_sigma", "ha", "white_star", "kai", "query"],
                    ["copyright", "buttcheeks", "ha", "zhe", "komi_dzje", "lambda", "white_star"],
                    ["shima", "pilcrow", "yat", "big_yus", "zhe", "query", "teh"],
                    ["psi", "teh", "yat", "sigma", "pilcrow", "ksi", "dark_star"],
                    ["shima", "e", "thousand", "ae", "psi", "i", "omega"]
                ];

function check_keypads_event(e) {
    if(e.target.value === "done") {
        for(var i = 0; i < array_of_symbols.length; i++) {
            for(var j = 0; j < array_of_symbols[i].length; j++) {
                console.log(array_of_symbols[i][j]);
            }
        }
    }
    else {
        console.log(button_keypad_array);
        check_keypad_pressed(e);
    }
}

function check_keypad_pressed(e) {
    for(var i = 0; i < array_of_symbols.length; i++) {
        if(array_of_symbols[i].indexOf(e.target.alt) == -1) {
            for(var j = 0; j < array_of_symbols[i].length; j++) {
                for(var k = 0; k < button_keypad_array.length; k++) {
                    if(button_keypad_array[k].value === array_of_symbols[i][j])
                        button_keypad_array[k].style.visibility = "hidden";
                }
            }
        }
    }
}
