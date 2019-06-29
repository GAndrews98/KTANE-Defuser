function display_complicated_wires_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("complicated-wires-modal").classList.remove("hidden");
}

function hide_complicated_wires_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("complicated-wires-modal").classList.add("hidden");
}

function clear_complicated_checks() {
    if (get_led()) {
        document.getElementById('led').checked = false;
    }
    if (get_blue()) {
        document.getElementById('blue-color').checked = false;
    }
    if (get_red()) {
        document.getElementById('red-color').checked = false;
    }
    if (get_star()) {
        document.getElementById('star').checked = false;
    }
}

function run_complicated_wires(e) {
    if (e.target.value === "cancel") {
        hide_complicated_wires_module();
        clear_complicated_checks();
        remove_complicated_results()
    }
    if (e.target.value === "result") {
        remove_complicated_results();
        check_complicated_wire();
        clear_complicated_checks();
    }
    if (e.target.value === "done") {
        hide_complicated_wires_module();
        clear_complicated_checks();
        remove_complicated_results()
        modulesSolved++;
    }
}

//helpers
function get_led() {
    return document.getElementById('led').checked;
}

function get_blue() {
    return document.getElementById('blue-color').checked;
}

function get_red() {
    return document.getElementById('red-color').checked;
}

function get_star() {
    return document.getElementById('star').checked;
}

//display answers
function cut_it() {
    var modalBody = document.getElementsByClassName("complicated-container")[0];

    var complicatedResults = document.createElement("p");
    complicatedResults.classList.add("complicated-result");
    complicatedResults.textContent = "Cut the wire";

    modalBody.appendChild(complicatedResults);
}

function dont_cut() {
    var modalBody = document.getElementsByClassName("complicated-container")[0];

    var complicatedResults = document.createElement("p");
    complicatedResults.classList.add("complicated-result");
    complicatedResults.textContent = "Don't cut the wire";

    modalBody.appendChild(complicatedResults);
}

function remove_complicated_results() {
    if (document.getElementsByClassName("complicated-result")[0])
        document.getElementsByClassName("complicated-result")[0].remove();
}


//logic
function check_complicated_wire() {
    if (get_red()) {
        if (get_blue()){
            if (get_star()) {
                if (get_led()) {
                    dont_cut();
                } else {
                    if (get_parallel()) {
                        cut_it();
                    } else {
                        dont_cut();
                    }
                }
            } else {
                if (get_parity() === "even") {
                    cut_it();
                } else {
                    dont_cut();
                }
            }
        } else {
            if (get_star()) {
                if (get_led()) {
                    if (get_batteries() > 2) {
                        cut_it();
                    } else {
                        dont_cut();
                    }
                } else {
                    cut_it();
                }
            } else {
                if (get_led()) {
                    if (get_batteries() > 2) {
                        cut_it();
                    } else {
                        dont_cut();
                    }
                } else {
                    if (get_parity() === "even") {
                        cut_it();
                    } else {
                        dont_cut();
                    }
                }
            }
        }
    } else {
        if (get_blue()){
            if (get_led()) {
                if (get_parallel()) {
                    cut_it();
                } else {
                    dont_cut();
                }
            } else {
                if (get_star()) {
                    dont_cut();
                } else {
                    if (get_parity() === "even") {
                        cut_it();
                    } else {
                        dont_cut();
                    }
                }
            }
        } else {
            if (get_led()) {
                if (get_star()) {
                    if (get_batteries() > 2) {
                        cut_it();
                    } else {
                        dont_cut();
                    }
                } else {
                    dont_cut();
                }
            } else {
                cut_it();
            }
        }
    }
}
