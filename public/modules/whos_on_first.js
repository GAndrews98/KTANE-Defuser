//TODO
function display_whos_on_first_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("whos-on-first-modal").classList.remove("hidden");
    document.getElementById("whos-on-first-display").focus();
}

function hide_whos_on_first_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("whos-on-first-modal").classList.add("hidden");
}

var whos_on_first_display;

var whos_object = {
    ready: ["yes", "okay", "what", "middle", "left", "press", "right", "blank", "ready"],
    first: ["left", "okay", "yes", "middle", "no", "right", "nothing", "uhhh", "wait", "ready", "blank", "what", "press", "first"],
    no: ["blank", "uhhh", "wait", "first", "what", "ready", "right", "yes", "nothing", "left", "press", "okay", "no"],
    blank: []
}

function start_whos_on_first(e) {
    if(e.target.value === "display-submit") {
        console.log("you're");
        whos_on_first_display = document.getElementById("whos-on-first-display").value.toLowerCase();
        if(whos_counter === 0)
            find_img();
        else
            find_array();
    }
    if(e.target.value === "cancel") {
        hide_whos_on_first_module();
        document.getElementById("whos-on-first-display").value = "";
    }
    if(e.target.value === "done") {
        hide_whos_on_first_module();
        document.getElementById("whos-on-first-display").value = "";
    }
}

function find_img() {
    if(whos_on_first_display === "ur") {
        //top left;
        show_whos_results("top left");
    } else if(whos_on_first_display === "first" || whos_on_first_display === "okay" || whos_on_first_display === "c") {
        //top right;
        show_whos_results("top right");
    } else if(whos_on_first_display === "yes" || whos_on_first_display === "nothing" || whos_on_first_display === "led" || whos_on_first_display === "they are") {
        //middle left;
        show_whos_results("middle left");
    } else if(whos_on_first_display === "blank" || whos_on_first_display === "read" || whos_on_first_display === "red" || whos_on_first_display === "you" || whos_on_first_display === "your" || whos_on_first_display === "you're" || whos_on_first_display === "their") {
        //middle right;
        show_whos_results("middle right");
    } else if(whos_on_first_display === "" || whos_on_first_display === "reed" || whos_on_first_display === "leed" || whos_on_first_display === "they're") {
        //bottem left;
        show_whos_results("bottem left");
    } else if(whos_on_first_display === "display" || whos_on_first_display === "says" || owhos_on_first_display === "no" || whos_on_first_display === "lead" || whos_on_first_display === "hold on" || whos_on_first_display === "you are" || whos_on_first_display === "there" || whos_on_first_display === "see" || whos_on_first_display === "cee") {
        //bottem right;
        show_whos_results("bottem right");
    }
}

function find_array() {

}
