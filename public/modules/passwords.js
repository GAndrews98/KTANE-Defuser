function display_passwords_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("passwords-modal").classList.remove("hidden");
    document.getElementById("column1").focus();
}

function hide_passwords_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("passwords-modal").classList.add("hidden");
}

var string1 = "";
var string2 = "";
var string3 = "";
var passwords = ["about", "after", "again", "below", "could", "every", "first", "found", "great", "house", "large", "learn", "never", "other", "place", "plant", "right", "small", "sound", "spell", "still", "study", "their", "there", "these", "thing", "think", "three", "water", "where", "which", "world", "would", "write"];
var p1 = [];
var p2 = [];
var p3 = [];


function live_search(e) {
    string1 = document.getElementById('column1').value;
    string2 = document.getElementById('column2').value;
    string3 = document.getElementById('column3').value;

    //clears the arrays if needed
    if(string1.length != 6) {
        p1 = [];
        remove_password_results();
    }
    if(string2.length != 6) {
        p2 = [];
        if(p1.length != 0) {
            remove_password_results();
            print_the_password(p1);
        }
    }
    if(string3.length != 6) {
        p3 = [];
        if(p2.length != 0 && p1.length != 0) {
            remove_password_results();
            print_the_password(p2);
        }
    }

    //fills the array if needed
    if(p1.length === 0)
        test(string1, 0, passwords, p1);
    if(p2.length === 0)
        test(string2, 1, p1, p2);
    if(p3.length === 0)
        test(string3, 2, p2, p3);
}

function test(string, index, check, add_array) {
    if(string.length === 6) {
        for(var i = 0; i < string.length; i++) {
            for(var j = 0; j < check.length; j++) {
                if(string[i] === check[j][index]) {
                    add_array.push(check[j]);
                }
            }
        }
        remove_password_results();
        print_the_password(add_array);
    }
}

function clear_all_password_arrays() {
    p1 = [];
    p2 = [];
    p3 = [];
    string1 = "";
    string2 = "";
    string3 = "";
}

function clear_password_input() {
    document.getElementById('column1').value = "";
    document.getElementById('column2').value = "";
    document.getElementById('column3').value = "";
}

function remove_password_results() {
    if (document.getElementsByClassName("passwords-result")) {
        var passwordsBody = document.getElementsByClassName("passwords-result");
        for (var i = 0; i < passwordsBody.length; i++) {
            passwordsBody[i].remove();
            remove_password_results();
        }
    }
}

function show_password(pw) {
    var passwordsBody = document.getElementsByClassName("passwords-container")[0];

    var passwordsResult = document.createElement("p");
    passwordsResult.textContent = pw;
    passwordsResult.classList.add("passwords-result");
    passwordsBody.appendChild(passwordsResult);
}

function print_the_password(array) {
    for (var i = 0; i < array.length; i++) {
        // console.log(p3[i]);
        show_password(array[i]);
    }
}

function find_password() {
    for (var i = 0; i < string1.length; i++) {
        for (var j = 0; j < passwords.length; j++) {
            if (string1[i] === passwords[j][0]) {
                p1.push(passwords[j]);
            }
        }
    }
    for (var i = 0; i < string2.length; i++) {
        for (var j = 0; j < p1.length; j++) {
            if (string2[i] === p1[j][1]) {
                p2.push(p1[j]);
            }
        }
    }
    for (var i = 0; i < string3.length; i++) {
        for (var j = 0; j < p2.length; j++) {
            if (string3[i] === p2[j][2]) {
                p3.push(p2[j]);
            }
        }
    }
    print_the_password(p3);
}

function check_passwords(e) {
    //checks if the user hits cancel
    if (e.target.value === "cancel") {
        hide_passwords_module();
        clear_password_input();
        clear_all_password_arrays();
        remove_password_results();
    }

    //checks if the user hits result
    if (e.target.value === "done") {
        string1 = document.getElementById('column1').value;
        string2 = document.getElementById('column2').value;
        string3 = document.getElementById('column3').value;
        if (string1.length === 6 && string2.length === 6 && string3.length === 6) {
            hide_passwords_module();
            clear_password_input();
            clear_all_password_arrays();
            remove_password_results();
            modulesSolved++;
        } else {
            alert("You may have not entered enough letters per input box, there must be 6 per box");
        }
    }
}
