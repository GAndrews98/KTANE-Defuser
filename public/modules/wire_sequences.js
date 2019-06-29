function display_wire_sequence_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("wire-sequence-modal").classList.remove("hidden");
    document.getElementById("column1").focus();
}

function hide_wire_sequence_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("wire-sequence-modal").classList.add("hidden");
}
function check_sequence(e) {
    //checks if the user hits cancel
    if (e.target.value === "cancel") {
        hide_wire_sequence_module();
        //clear_password_input();
        //clear_all_password_arrays();
        //remove_password_results();
    }

    //check if the user hits next


}

var blueWire = 0;
var blackWire = 0;
var redWire = 0;
var blueArmy = [1, 4, 1, 0, 1, 5, 2, 4, 0];
var redArmy = [2, 1, 0, 4, 1, 4, 6, 3, 1];
var blackArmy = [6, 4, 1, 4, 1, 5, 3, 2, 2];
var cutArray = [0, 0, 0]

var colorArray = [];
var letterArray = [];

//TODO
// var solveButton = document.getElementById('create-twit-button');
// solveButton.onclick = function() {wireInput()};
// function wireInput(){
//   //Need to get inputs into arrays
//   // if(inputs missing){ask to complete the inputs.}
//
//   //reset cut array to [0, 0, 0]
//   wireCutting();
// }

function wireCutting() {
    for (i = 0; i < colorArray.length; i++) {
        if (colorArray[i] == "red") {
            if (letterArrayp[i] == "A") {
                if (redArmy[redWire] == "0" || redArmy[redWire] == "3" || redArmy[redWire] == "4" || redArmy[redWire] == "6") {
                    cutArray[i] = 1;
                    redWire++
                } else {
                    redWire++
                }
            } else if (letterArray[i] == "B") {
                if (redArmy[redWire] == "1" || redArmy[redWire] == "3" || redArmy[redWire] == "5" || redArmy[redWire] == "6") {
                    cutArray[i] = 1;
                    redWire++
                } else {
                    redWire++
                }
            } else if (letterArray[i] == "C") {
                if (redArmy[redWire] == "2" || redArmy[redWire] == "4" || redArmy[redWire] == "5" || redArmy[redWire] == "6") {
                    cutArray[i] = 1;
                    redWire++
                } else {
                    redWire++
                }
            } else {
                console.log("Error");
            }
        } else if (colorArray[i] == "blue") {
            if (letterArray[i] == "A") {
                if (blueArmy[blueWire] == "0" || blueArmy[blueWire] == "3" || blueArmy[blueWire] == "4" || blueArmy[blueWire] == "6") {
                    cutArray[i] = 1;
                    blueWire++
                } else {
                    blueWire++
                }
            } else if (letterArray[i] == "B") {
                if (blueArmy[blueWire] == "1" || blueArmy[blueWire] == "3" || blueArmy[blueWire] == "5" || blueArmy[blueWire] == "6") {
                    cutArray[i] = 1;
                    blueWire++
                } else {
                    blueWire++
                }
            } else if (letterArray[i] == "C") {
                if (blueArmy[blueWire] == "2" || blueArmy[blueWire] == "4" || blueArmy[blueWire] == "5" || blueArmy[blueWire] == "6") {
                    cutArray[i] = 1;
                    blueWire++
                } else {
                    blueWire++
                }
            } else {
                console.log("Error");
            }
        } else if (colorArray[i] == "black") {
            if (letterArrayp[i] == "A") {
                if (blackArmy[blackWire] == "0" || blackArmy[blackWire] == "3" || blackArmy[blackWire] == "4" || blackArmy[blackWire] == "6") {
                    cutArray[i] = 1;
                    blackWire++
                } else {
                    redWire++
                }
            } else if (letterArray[i] == "B") {
                if (blackArmy[blackWire] == "1" || blackArmy[blackWire] == "3" || blackArmy[blackWire] == "5" || blackArmy[blackWire] == "6") {
                    cutArray[i] = 1;
                    blackWire++
                } else {
                    blackWire++
                }
            } else if (letterArray[i] == "C") {
                if (blackArmy[blackWire] == "2" || blackArmy[blackWire] == "4" || blackArmy[blackWire] == "5" || blackArmy[blackWire] == "6") {
                    cutArray[i] = 1;
                    blackWire++
                } else {
                    blackWire++
                }
            } else {
                console.log("Error");
            }
        } else {
            console.log("Error in color array")
        }
    }
    displayResults();
}

function displayResults() {
    //need to display which need to be cut
    //need to reset all necasary arrays.
}
