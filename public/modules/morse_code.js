function display_morse_code_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("morse-code-modal").classList.remove("hidden");
    document.addEventListener("keydown", check_morse_code_key);
}

function hide_morse_code_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("morse-code-modal").classList.add("hidden");
    document.removeEventListener("keydown", check_morse_code_key);
}

var user_morse_words = "Nothing is currently selected";
var all_morse_words = ["shell", "halls", "slick", "trick","boxes", "leaks", "strobe", "bistro", "flick", "bombs", "break", "brick", "steak", "sting", "vector", "beats"];
var dot_dash = [];
var array = [];
var morse_number = "";

// TODO: I want to display the dots and dashs when the user clicks the button, kinda like simple wires

function check_morse_code(e) {
    //TODO
    if(e.target.value === "dot") {
        dot_dash.push("dot");
        show_dot_dash("dot");
    }
    if(e.target.value === "dash") {
        dot_dash.push("dash");
        show_dot_dash("dash");
    }
    if(e.target.value === "gap") {
        check_dot_dash();
        remove_all_morse_dot_dash();
    }
    if(e.target.value === "result") {
        remove_all_morse_dot_dash();
        remove_morse_code_results();
        fill_user_array();
        set_number();
        show_morse_code_results();
        clear_morse_code_arrays();
    }
    if(e.target.value === "cancel") {
        clear_morse_code_arrays();
        remove_all_morse_dot_dash();
        remove_morse_code_results();
        hide_morse_code_module();
    }
    if(e.target.value === "done") {
        clear_morse_code_arrays();
        remove_all_morse_dot_dash();
        remove_morse_code_results();
        hide_morse_code_module();
        modulesSolved++;
    }
    if(e.target.value === "undo") {
        undo_dot_dash();
        remove_one_dot_dash();
    }
}

function check_morse_code_key(e) {
    console.log(e);
    if (e.key == 0) {
        check_dot_dash();
        remove_all_morse_dot_dash();
    }
    if (e.key == 1) {
        dot_dash.push("dot");
        show_dot_dash("dot");
    }
    if(e.key == 2) {
        dot_dash.push("dash");
        show_dot_dash("dash");
    }
}

function clear_morse_code_arrays() {
    user_morse_words = "Nothing is currently selected";
    dot_dash = [];
    array = [];
    morse_number = "";
}

function check_dot_dash() {
    find_the_letter(dot_dash.length);
    dot_dash = [];
}

function find_the_letter(x) {
    if(x === 1) {
        if(dot_dash[0] === "dot")
            array.push("e");
        else if(dot_dash[0] === "dash")
            array.push("t");
    }
    if(x === 2) {
        if(dot_dash[0] === "dot" && dot_dash[1] === "dash")
            array.push("a");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot")
            array.push("i");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash")
            array.push("m");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot")
            array.push("n");
    }
    if(x === 3) {
        if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dot")
            array.push("d");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash" && dot_dash[2] === "dot")
            array.push("g");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dash")
            array.push("k");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash" && dot_dash[2] === "dash")
            array.push("o");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dot")
            array.push("r");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dot")
            array.push("s");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dash")
            array.push("u");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dash")
            array.push("w");

    }
    if(x === 4) {
        if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dot" && dot_dash[3] === "dot")
            array.push("b");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dash" && dot_dash[3] === "dot")
            array.push("c")
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dash" && dot_dash[3] === "dot")
            array.push("f");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dot" && dot_dash[3] === "dot")
            array.push("h");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dash" && dot_dash[3] === "dash")
            array.push("j");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dot" && dot_dash[3] === "dot")
            array.push("l");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dash" && dot_dash[3] === "dot")
            array.push("p");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash" && dot_dash[2] === "dot" && dot_dash[3] === "dash")
            array.push("q");
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dot" && dot_dash[3] === "dash")
            array.push("v");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dot" && dot_dash[3] === "dash")
            array.push("x");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dash" && dot_dash[3] === "dash")
            array.push("y");
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash" && dot_dash[2] === "dot" && dot_dash[3] === "dot")
            array.push("z");
    }
}

function shift_by_one(test, real) {
    var i = 0;
    var first = "";
    var string = "";
    while(i < 6) {
        for(var l = 0; l < test.length; l++) {
            string += test[l];
        }
        if(string === real) {
            user_morse_words = real;
            return;
        }
        first = test[0];
        for(var j = 0; j < test.length-1; j++) {
            test[j] = test[j+1];
        }
        test[test.length-1] = first;
        i++;
        string = "";
    }
}

function fill_user_array() {
    var i = 0;
    var filler = "";
    while(i < 16) {
        if(user_morse_words != "Nothing is currently selected")
            return;
        filler = all_morse_words[i];
        shift_by_one(array, filler);
        i++;
    }
}

function set_number() {
    switch (user_morse_words) {
        case "shell":
            morse_number = "3.505 MHz";
            break;
        case "halls":
            morse_number = "3.515 MHz";
            break;
        case "slick":
            morse_number = "3.522 MHz";
            break;
        case "trick":
            morse_number = "3.532 MHz";
            break;
        case "boxes":
            morse_number = "3.535 MHz";
            break;
        case "leaks":
            morse_number = "3.542 MHz";
            break;
        case "strobe":
            morse_number = "3.545 MHz";
            break;
        case "bistro":
            morse_number = "3.552 MHz";
            break;
        case "flick":
            morse_number = "3.555 MHz";
            break;
        case "bombs":
            morse_number = "3.565 MHz";
            break;
        case "break":
            morse_number = "3.572 MHz";
            break;
        case "brick":
            morse_number = "3.575 MHz";
            break;
        case "steak":
            morse_number = "3.582 MHz";
            break;
        case "sting":
            morse_number = "3.592 MHz";
            break;
        case "vector":
            morse_number = "3.595 MHz";
            break;
        case "beats":
            morse_number = "3.600 MHz";
            break;
    }
}

function show_morse_code_results() {
    var morseContainer = document.getElementsByClassName("morse-code-container")[0];

    var morseResults = document.createElement("p");
    morseResults.classList.add("morse-result");
    morseResults.textContent = user_morse_words + " " + morse_number;
    morseContainer.appendChild(morseResults);
}

function remove_morse_code_results() {
    if (document.getElementsByClassName("morse-result")[0])
        document.getElementsByClassName("morse-result")[0].remove();
}

function show_dot_dash(dot_or_dash) {
    var morseDotDashContainer = document.getElementsByClassName("dot-dash-container")[0];

    var morseDotDash = document.createElement("p");
    morseDotDash.classList.add("morse-dot-dash");
    morseDotDash.textContent = dot_or_dash;
    morseDotDashContainer.appendChild(morseDotDash);
}

function remove_all_morse_dot_dash() {
    if (document.getElementsByClassName("morse-dot-dash"))
        var morseDotDash = document.getElementsByClassName("morse-dot-dash");
        for(var i = 0; i < morseDotDash.length; i++) {
            morseDotDash[i].remove();
            remove_all_morse_dot_dash();
        }
}

function remove_one_dot_dash() {
    if (document.getElementsByClassName("morse-dot-dash"))
        var morseDotDash = document.getElementsByClassName("morse-dot-dash");
        morseDotDash[morseDotDash.length-1].remove();
}

function undo_dot_dash() {
    dot_dash.pop();
}




//----------------------------We might get rid of this later!!!!-----------------------
// if(string === "shell" || string === "hells" || string === "ellsh" || string === "llshe" || string === "lshel")
//     user_morse_words = "shell";
// else if(string === "halls" || string === "allsh" || string === "llsha" || string === "lshal" || string === "shall")
//     user_morse_words = "halls";
// else if(string === "slick" || string === "licks" || string === "icksl" || string === "cksli" || string === "kslic")
//     user_morse_words = "slick";
// else if(string === "trick" || string === "rickt" || string === "icktr" ||  string === "cktri" || string === "ktric")
//     user_morse_words = "trick";
// else if(string === "boxes" || string === "oxesb" || string === "xesbo" || string === "esbox" || string === "sboxe")
//     user_morse_words = "boxes";
// else if(string === "leaks" || string === "eaksl" || string === "aksle" || string === "kslea" || string === "sleak")
//     user_morse_words = "leaks";
// else if(string === "strobe" || string === "trobes" || string === "robest" || string === "obestr" || string === "bestro" || string === "estrob")
//     user_morse_words = "strobe";
// else if(string === "bistro" || string === "istrob" || string === "strobi" || string === "trobis" || string === "robist" || string === "obistr")
//     user_morse_words = "bistro";
// else if(string === "flick" || string === "lickf" || string === "ickfl" || string === "ckfli" || string === "kflic")
//     user_morse_words = "flick";
// else if(string === "bombs" || string === "ombsb" || string === "mbsbo" || string === "bsbom" || string === "sbomb")
//     user_morse_words = "bombs";
// else if(string === "break" || string === "reakb" || string === "eakbr" || string === "akbre" || string === "kbrea")
//     user_morse_words = "break";
// else if(string === "brick" || string === "rickb" || string === "ickbr" || string === "ckbri" || string === "kbric")
//     user_morse_words = "brick";
// else if(string === "steak" || string === "teaks" || string === "eakst" || string === "akste" || string === "kstea")
//     user_morse_words = "steak";
// else if(string === "sting" || string === "tings" || string === "ingst" || string === "ngsti" || string === "gstin")
//     user_morse_words = "sting";
// else if(string === "vector" || string === "ectorv" || string === "ctorve" || string === "torvec" || string === "orvect" || string === "rvecto")
//     user_morse_words = "vector";
// else if(string === "beats" || string === "eatsb" || string === "atsbe" || string === "tsbea" || string === "sbeat")
//     user_morse_words = "beats";
