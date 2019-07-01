//TODO
function display_whos_on_first_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("whos-on-first-modal").classList.remove("hidden");
    document.addEventListener("keydown", check_wof_key);
    document.getElementById("whos-on-first-display").focus();
}

function hide_whos_on_first_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("whos-on-first-modal").classList.add("hidden");
}

var wof_display;
var wof_counter = true;

var wof_words = {
    ready: "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY",
    first: "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST",
    no: "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO",
    blank: "WAIT, RIGHT, OKAY, MIDDLE, BLANK",
    nothing: "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING",
    yes: "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES",
    what: "UHHH, WHAT",
    uhh: "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH",
    left: "RIGHT, LEFT",
    right: "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT",
    middle: "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE",
    okay: "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY",
    wait: "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT",
    press: "RIGHT, MIDDLE, YES, READY, PRESS",
    you: "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU",
    your: "UH UH, YOU ARE, UH HUH, YOUR",
    ur: "DONE, U, UR",
    u: "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U",
    done: "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE",
    next: "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT",
    hold: "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD",
    sure: "YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE",
    like: "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE"
}

var edge_words = {
    you_are: "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE",
    youre: "YOU, YOU'RE",
    uh_huh: "UH HUH",
    uh_uh: "UR, U, YOU ARE, YOU'RE, NEXT, UH UH",
    whatQ: "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?"
}

function remove_wof_results() {
    var wofResultContainer = document.getElementsByClassName('whos-on-first-result')[0];

    while (wofResultContainer.firstChild) {
        wofResultContainer.removeChild(wofResultContainer.firstChild);
    }
}

function start_whos_on_first(e) {
    if(e.target.value === "display-submit") {
        wof_display = document.getElementById("whos-on-first-display").value.toLowerCase();
        if(wof_counter === true) {
            find_img();
            wof_counter = false;
        } else {
            find_array();
            wof_counter = true;
        }
    }
    if(e.target.value === "cancel") {
        wof_counter = true;
        document.getElementById("whos-on-first-display").value = "";
        change_input_text("Display word");
        remove_wof_results();
        hide_whos_on_first_module();
    }
    if(e.target.value === "done") {
        modulesSolved++;
        wof_counter = true;
        document.getElementById("whos-on-first-display").value = "";
        change_input_text("Display word");
        remove_wof_results();
        hide_whos_on_first_module();
    }
}

function check_wof_key(e) {
    if (e.which === 13) {
        wof_display = document.getElementById("whos-on-first-display").value.toLowerCase();
        if (wof_counter === true) {
            find_img();
            wof_counter = false;
        } else {
            find_array();
            wof_counter = true;
        }
    }
}
function find_img() {
    if (wof_display === "ur") {
        //top left;
        show_whos_results("Top left");
    } else if (wof_display === "first" || wof_display === "okay" || wof_display === "c") {
        //top right;
        show_whos_results("Top right");
    } else if (wof_display === "yes" || wof_display === "nothing" || wof_display === "led" || wof_display === "they are") {
        //middle left;
        show_whos_results("Middle left");
    } else if (wof_display === "blank" || wof_display === "read" || wof_display === "red" || wof_display === "you" || wof_display === "your" || wof_display === "you're" || wof_display === "their") {
        //middle right;
        show_whos_results("Middle right");
    } else if (wof_display === "" || wof_display === "reed" || wof_display === "leed" || wof_display === "they're") {
        //bottem left;
        show_whos_results("Bottom left");
    } else if (wof_display === "display" || wof_display === "says" || wof_display === "no" || wof_display === "lead" || wof_display === "hold on" || wof_display === "you are" || wof_display === "there" || wof_display === "see" || wof_display === "cee") {
        //bottem right;
        show_whos_results("Bottom right");
    }
}
function find_array() {
    remove_wof_results();
    change_input_text("Display word");
    var wofResultContainer = document.getElementsByClassName('whos-on-first-result')[0];

    var wofResultWord = document.createElement("p");
    // Handles edge cases
    if (wof_display === "you are") {
        wofResultWord.textContent = edge_words.you_are;
    } else if (wof_display === "you're") {
        wofResultWord.textContent = edge_words.youre;
    } else if (wof_display === "uh huh") {
        wofResultWord.textContent = edge_words.uh_huh;
    } else if (wof_display === "uh uh") {
        wofResultWord.textContent = edge_words.uh_uh;
    } else if (wof_display === "what?") {
        wofResultWord.textContent = edge_words.whatQ;
    } else {
        wofResultWord.textContent = wof_words[wof_display];
    }

    wofResultContainer.appendChild(wofResultWord);
    document.getElementById("whos-on-first-display").value = "";
    document.getElementById("whos-on-first-display").focus();
}

function show_whos_results(word) {
    remove_wof_results();
    change_input_text(word);
    var wofResultContainer = document.getElementsByClassName('whos-on-first-result')[0];

    var wofResultWord = document.createElement("p");
    wofResultWord.textContent = wof_display.charAt(0).toUpperCase() + wof_display.slice(1);

    var wofResultImg = document.createElement("img");
    var wofPath = "assets/wof/" + word + ".png";
    wofResultImg.setAttribute("src", wofPath);

    wofResultContainer.appendChild(wofResultWord);
    wofResultContainer.appendChild(wofResultImg);
    document.getElementById("whos-on-first-display").value = "";
    document.getElementById("whos-on-first-display").focus();
}

function change_input_text(word) {
    var inputText = document.getElementById('input-text');
    inputText.textContent = word + ":";
}
