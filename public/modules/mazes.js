//TODO

function display_maze_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("maze-modal").classList.remove("hidden");
}

function hide_maze_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("maze-modal").classList.add("hidden");
}

var nodeClicked = [];
var stage = 0;
var mazeGo = {
    maze: [],
    mazeString: "",
    start: 0,
    stop: 0
};

function check_mazes(e) {
    if (e.target.className === "node" && nodeClicked.length < 2) {
        nodeClicked.push(e.target.id);
        if (nodeClicked.length === 2 && stage === 0) {
            choose_maze();
            uncheck_nodes();
            stage = 1;
            maze_instruction(stage);
        }
        if (nodeClicked.length === 1 && stage === 1) {
            choose_start();
            uncheck_nodes();
            stage = 2;
            maze_instruction(stage);
        }
        if (nodeClicked.length === 1 && stage === 2) {
            choose_end();
            uncheck_nodes();
            maze_instruction(stage+1);
            mazeSolver(mazeGo.maze, mazeGo.start, mazeGo.stop);
        }
    }

    //Check if the cancel button or the X was pressed
    if (e.target.value === "cancel") {
        hide_maze_module();
        uncheck_nodes();
        stage = 0;
        mazeGo.maze = [];
        mazeGo.start = 0;
        mazeGo.stop = 0;
        nodeClicked = [];
        maze_instruction(0);
        clear_maze_results();
    }

    //Check of the undo button was pressed
    if (e.target.value === "undo") {
        nodeClicked = [];
        uncheck_nodes();
        if (stage != 0) {
            stage = stage-1;
            maze_instruction(stage);
        } else {
            stage = 0;
            maze_instruction(0);
        }
    }

    if (e.target.value === "done") {
        hide_maze_module();
        uncheck_nodes();
        stage = 0;
        mazeGo.maze = [];
        mazeGo.start = 0;
        mazeGo.stop = 0;
        nodeClicked = [];
        maze_instruction(0);
        clear_maze_results();
    }
}

function choose_maze() {
    if ((nodeClicked[0] === "node7" || nodeClicked[0] === "node18") && (nodeClicked[1] === "node7" || nodeClicked[1] === "node18")) {
        mazeGo.maze = maze1;
    }
    if ((nodeClicked[0] === "node20" || nodeClicked[0] === "node11") && (nodeClicked[1] === "node20" || nodeClicked[1] === "node11")) {
        mazeGo.maze = maze2;
    }
    if ((nodeClicked[0] === "node24" || nodeClicked[0] === "node22") && (nodeClicked[1] === "node24" || nodeClicked[1] === "node22")) {
        mazeGo.maze = maze3;
    }
    if ((nodeClicked[0] === "node1" || nodeClicked[0] === "node19") && (nodeClicked[1] === "node1" || nodeClicked[1] === "node19")) {
        mazeGo.maze = maze4;
    }
    if ((nodeClicked[0] === "node17" || nodeClicked[0] === "node34") && (nodeClicked[1] === "node17" || nodeClicked[1] === "node34")) {
        mazeGo.maze = maze5;
    }
    if ((nodeClicked[0] === "node5" || nodeClicked[0] === "node27") && (nodeClicked[1] === "node5" || nodeClicked[1] === "node27")) {
        mazeGo.maze = maze6;
    }
    if ((nodeClicked[0] === "node2" || nodeClicked[0] === "node32") && (nodeClicked[1] === "node2" || nodeClicked[1] === "node32")) {
        mazeGo.maze = maze7;
    }
    if ((nodeClicked[0] === "node4" || nodeClicked[0] === "node21") && (nodeClicked[1] === "node4" || nodeClicked[1] === "node21")) {
        mazeGo.maze = maze8;
    }
    if ((nodeClicked[0] === "node9" || nodeClicked[0] === "node25") && (nodeClicked[1] === "node9" || nodeClicked[1] === "node25")) {
        mazeGo.maze = maze9;
    }
}

function maze_instruction(instructStage) {
    var modalBody = document.getElementsByClassName('maze-prompt');
    if (instructStage === 0) {
        modalBody[0].classList.remove("hidden");
        modalBody[1].classList.add("hidden");
        modalBody[2].classList.add("hidden");
        modalBody[3].classList.add("hidden");
    }
    if (instructStage === 1) {
        modalBody[0].classList.add("hidden");
        modalBody[1].classList.remove("hidden");
        modalBody[2].classList.add("hidden");
        modalBody[3].classList.add("hidden");
    }
    if (instructStage === 2) {
        modalBody[0].classList.add("hidden");
        modalBody[1].classList.add("hidden");
        modalBody[2].classList.remove("hidden");
        modalBody[3].classList.add("hidden");
    }
    if (instructStage === 3) {
        modalBody[0].classList.add("hidden");
        modalBody[1].classList.add("hidden");
        modalBody[2].classList.add("hidden");
        modalBody[3].classList.remove("hidden");
    }
}

function clear_maze_results() {
    if (document.getElementsByClassName('maze-result')[0]) {
        for (var i = 0; i < document.getElementsByClassName('maze-result').length; i++) {
            document.getElementsByClassName("maze-result")[i].remove();
            clear_maze_results();
        }
    }
}

function display_maze_result(path) {
    var answer = "";
    var i = 0;
    for (i = 0; i < path.length-1; i++) {
        answer += (path[i] + ", ");
    }
    answer += path[i];
    var modalBody = document.getElementsByClassName('maze-container')[0];

    if (answer == "undefined") {
        answer = "Something broke. Try again."
    }
    var mazeResult = document.createElement("p");
    mazeResult.classList.add("maze-result")
    mazeResult.textContent = answer;

    modalBody.appendChild(mazeResult);
}

function uncheck_nodes() {
    var nodes = document.getElementsByClassName('node');

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked) {
            nodes[i].checked = false;
        }
    }

    nodeClicked = [];
}

function choose_start() {
    switch (nodeClicked[0]) {
        case "node1": mazeGo.start = mazeGo.maze[0]; break;
        case "node2": mazeGo.start = mazeGo.maze[1]; break;
        case "node3": mazeGo.start = mazeGo.maze[2]; break;
        case "node4": mazeGo.start = mazeGo.maze[3]; break;
        case "node6": mazeGo.start = mazeGo.maze[5]; break;
        case "node7": mazeGo.start = mazeGo.maze[6]; break;
        case "node8": mazeGo.start = mazeGo.maze[7]; break;
        case "node9": mazeGo.start = mazeGo.maze[8]; break;
        case "node10": mazeGo.start = mazeGo.maze[9]; break;
        case "node12": mazeGo.start = mazeGo.maze[11]; break;
        case "node13": mazeGo.start = mazeGo.maze[12]; break;
        case "node14": mazeGo.start = mazeGo.maze[13]; break;
        case "node16": mazeGo.start = mazeGo.maze[15]; break;
        case "node17": mazeGo.start = mazeGo.maze[16]; break;
        case "node18": mazeGo.start = mazeGo.maze[17]; break;
        case "node19": mazeGo.start = mazeGo.maze[18]; break;
        case "node20": mazeGo.start = mazeGo.maze[19]; break;
        case "node21": mazeGo.start = mazeGo.maze[20]; break;
        case "node22": mazeGo.start = mazeGo.maze[21]; break;
        case "node23": mazeGo.start = mazeGo.maze[22]; break;
        case "node24": mazeGo.start = mazeGo.maze[23]; break;
        case "node25": mazeGo.start = mazeGo.maze[24]; break;
        case "node26": mazeGo.start = mazeGo.maze[25]; break;
        case "node27": mazeGo.start = mazeGo.maze[26]; break;
        case "node28": mazeGo.start = mazeGo.maze[27]; break;
        case "node29": mazeGo.start = mazeGo.maze[28]; break;
        case "node30": mazeGo.start = mazeGo.maze[29]; break;
        case "node31": mazeGo.start = mazeGo.maze[30]; break;
        case "node32": mazeGo.start = mazeGo.maze[31]; break;
        case "node33": mazeGo.start = mazeGo.maze[32]; break;
        case "node34": mazeGo.start = mazeGo.maze[33]; break;
        case "node36": mazeGo.start = mazeGo.maze[35]; break;
    }
}

function choose_end() {
    switch (nodeClicked[0]) {
        case "node1": mazeGo.stop = mazeGo.maze[0]; break;
        case "node2": mazeGo.stop = mazeGo.maze[1]; break;
        case "node3": mazeGo.stop = mazeGo.maze[2]; break;
        case "node4": mazeGo.stop = mazeGo.maze[3]; break;
        case "node5": mazeGo.stop = mazeGo.maze[4]; break;
        case "node6": mazeGo.stop = mazeGo.maze[5]; break;
        case "node7": mazeGo.stop = mazeGo.maze[6]; break;
        case "node8": mazeGo.stop = mazeGo.maze[7]; break;
        case "node9": mazeGo.stop = mazeGo.maze[8]; break;
        case "node10": mazeGo.stop = mazeGo.maze[9]; break;
        case "node11": mazeGo.stop = mazeGo.maze[10]; break;
        case "node12": mazeGo.stop = mazeGo.maze[11]; break;
        case "node13": mazeGo.stop = mazeGo.maze[12]; break;
        case "node14": mazeGo.stop = mazeGo.maze[13]; break;
        case "node15": mazeGo.stop = mazeGo.maze[14]; break;
        case "node16": mazeGo.stop = mazeGo.maze[15]; break;
        case "node17": mazeGo.stop = mazeGo.maze[16]; break;
        case "node18": mazeGo.stop = mazeGo.maze[17]; break;
        case "node19": mazeGo.stop = mazeGo.maze[18]; break;
        case "node20": mazeGo.stop = mazeGo.maze[19]; break;
        case "node21": mazeGo.stop = mazeGo.maze[20]; break;
        case "node22": mazeGo.stop = mazeGo.maze[21]; break;
        case "node23": mazeGo.stop = mazeGo.maze[22]; break;
        case "node24": mazeGo.stop = mazeGo.maze[23]; break;
        case "node25": mazeGo.stop = mazeGo.maze[24]; break;
        case "node26": mazeGo.stop = mazeGo.maze[25]; break;
        case "node27": mazeGo.stop = mazeGo.maze[26]; break;
        case "node28": mazeGo.stop = mazeGo.maze[27]; break;
        case "node29": mazeGo.stop = mazeGo.maze[28]; break;
        case "node30": mazeGo.stop = mazeGo.maze[29]; break;
        case "node31": mazeGo.stop = mazeGo.maze[30]; break;
        case "node32": mazeGo.stop = mazeGo.maze[31]; break;
        case "node33": mazeGo.stop = mazeGo.maze[32]; break;
        case "node34": mazeGo.stop = mazeGo.maze[33]; break;
        case "node35": mazeGo.stop = mazeGo.maze[34]; break;
        case "node36": mazeGo.stop = mazeGo.maze[35]; break;
    }
}

// Class node that holds each data
class Node {
    constructor(up, right, down, left, circle, startingNode, endingNode, checked, coordinates, connected) {
        this.up = up;
        this.right = right;
        this.down = down;
        this.left = left;
        this.circle = circle;
        this.startingNode = startingNode;
        this.endingNode = endingNode;
        this.checked = checked;
        this.coordinates = coordinates;
        this.connected = connected;
    }
}

//creating each maze
var maze1 = new Array(36);
var maze2 = new Array(36);
var maze3 = new Array(36);
var maze4 = new Array(36);
var maze5 = new Array(36);
var maze6 = new Array(36);
var maze7 = new Array(36);
var maze8 = new Array(36);
var maze9 = new Array(36);

//initalizing maze1
function initMaze1() {
    var node1 = new Node(false, true, true, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, true, false, true, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, false, true, true, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, true, true, false, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, false, true, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, false, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(true, false, true, false, true, false, false, false, [2, 1], []);
    var node8 = new Node(false, true, true, false, false, false, false, false, [2, 2], []);
    var node9 = new Node(true, false, false, true, false, false, false, false, [2, 3], []);
    var node10 = new Node(true, true, false, false, false, false, false, false, [2, 4], []);
    var node11 = new Node(false, true, false, true, false, false, false, false, [2, 5], []);
    var node12 = new Node(false, false, true, true, false, false, false, false, [2, 6], []);
    var node13 = new Node(true, false, true, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(true, true, false, false, false, false, false, false, [3, 2], []);
    var node15 = new Node(false, false, true, true, false, false, false, false, [3, 3], []);
    var node16 = new Node(false, true, true, false, false, false, false, false, [3, 4], []);
    var node17 = new Node(false, true, false, true, false, false, false, false, [3, 5], []);
    var node18 = new Node(true, false, true, true, true, false, false, false, [3, 6], []);
    var node19 = new Node(true, false, true, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(false, true, false, false, false, false, false, false, [4, 2], []);
    var node21 = new Node(true, true, false, true, false, false, false, false, [4, 3], []);
    var node22 = new Node(true, false, false, true, false, false, false, false, [4, 4], []);
    var node23 = new Node(false, true, false, false, false, false, false, false, [4, 5], []);
    var node24 = new Node(true, false, true, true, false, false, false, false, [4, 6], []);
    var node25 = new Node(true, true, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(false, true, false, true, false, false, false, false, [5, 2], []);
    var node27 = new Node(false, true, true, true, false, false, false, false, [5, 3], []);
    var node28 = new Node(false, true, true, true, false, false, false, false, [5, 4], []);
    var node29 = new Node(false, false, false, true, false, false, false, false, [5, 5], []);
    var node30 = new Node(true, false, true, false, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, true, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(false, false, false, true, false, false, false, false, [6, 2], []);
    var node33 = new Node(true, true, false, false, false, false, false, false, [6, 3], []);
    var node34 = new Node(true, false, false, true, false, false, false, false, [6, 4], []);
    var node35 = new Node(false, true, false, false, false, false, false, false, [6, 5], []);
    var node36 = new Node(true, false, false, true, false, false, false, false, [6, 6], []);
    node1.connected.push("none", node2, node7, "none");
    node2.connected.push("none", node3, "none", node1);
    node3.connected.push("none", "none", node9, node2);
    node4.connected.push("none", node5, node10, "none");
    node5.connected.push("none", node6, "none", node4);
    node6.connected.push("none", "none", "none", node5);
    node7.connected.push(node1, "none", node13, "none");
    node8.connected.push("none", node9, node14, "none");
    node9.connected.push(node3, "none", "none", node8);
    node10.connected.push(node4, node11, "none", "none");
    node11.connected.push("none", node12, "none", node10);
    node12.connected.push("none", "none", node18, node11);
    node13.connected.push(node7, "none", node19, "none");
    node14.connected.push(node8, node15, "none", "none");
    node15.connected.push("none", "none", node21, node14);
    node16.connected.push("none", node17, node22, "none");
    node17.connected.push("none", node18, "none", node16);
    node18.connected.push(node12, "none", node24, node17);
    node19.connected.push(node13, "none", node25, "none");
    node20.connected.push("none", node21, "none", "none");
    node21.connected.push(node15, node22, "none", node20);
    node22.connected.push(node16, "none", "none", node21);
    node23.connected.push("none", node24, "none", "none");
    node24.connected.push(node18, "none", node30, "none");
    node25.connected.push(node19, node26, node31, "none");
    node26.connected.push("none", node27, "none", node25);
    node27.connected.push("none", "none", node33, node26);
    node28.connected.push("none", node29, node34, node27);
    node29.connected.push("none", "none", "none", node28);
    node30.connected.push(node24, "none", node36, "none");
    node31.connected.push(node25, node32, "none", "none");
    node32.connected.push("none", "none", "none", node31);
    node33.connected.push(node27, node34, "none", "none");
    node34.connected.push(node28, "none", "none", node33);
    node35.connected.push("none", node36, "none", "none");
    node36.connected.push(node30, "none", "none", node35);
    maze1 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

function initMaze2() {
    var node1 = new Node(false, true, false, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, true, true, true, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, false, false, true, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, true, true, false, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, true, true, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, false, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(false, true, true, false, false, false, false, false, [2, 1], []);
    var node8 = new Node(true, false, false, true, false, false, false, false, [2, 2], []);
    var node9 = new Node(false, true, true, false, false, false, false, false, [2, 3], []);
    var node10 = new Node(true, false, false, true, false, false, false, false, [2, 4], []);
    var node11 = new Node(true, true, false, false, false, false, false, false, [2, 5], []);
    var node12 = new Node(false, false, true, true, false, false, false, false, [2, 6], []);
    var node13 = new Node(true, false, true, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(false, true, true, false, false, false, false, false, [3, 2], []);
    var node15 = new Node(true, false, false, true, false, false, false, false, [3, 3], []);
    var node16 = new Node(false, true, true, false, false, false, false, false, [3, 4], []);
    var node17 = new Node(false, true, false, true, false, false, false, false, [3, 5], []);
    var node18 = new Node(true, false, true, true, false, false, false, false, [3, 6], []);
    var node19 = new Node(true, true, true, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(true, false, false, true, false, false, false, false, [4, 2], []);
    var node21 = new Node(false, true, true, false, false, false, false, false, [4, 3], []);
    var node22 = new Node(true, false, false, true, false, false, false, false, [4, 4], []);
    var node23 = new Node(false, false, true, false, false, false, false, false, [4, 5], []);
    var node24 = new Node(true, false, true, false, false, false, false, false, [4, 6], []);
    var node25 = new Node(true, false, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(false, false, true, false, false, false, false, false, [5, 2], []);
    var node27 = new Node(true, false, true, false, false, false, false, false, [5, 3], []);
    var node28 = new Node(false, true, true, false, false, false, false, false, [5, 4], []);
    var node29 = new Node(true, false, false, true, false, false, false, false, [5, 5], []);
    var node30 = new Node(true, false, true, false, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, false, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(true, true, false, false, false, false, false, false, [6, 2], []);
    var node33 = new Node(true, false, false, true, false, false, false, false, [6, 3], []);
    var node34 = new Node(true, true, false, false, false, false, false, false, [6, 4], []);
    var node35 = new Node(false, true, false, true, false, false, false, false, [6, 5], []);
    var node36 = new Node(true, false, false, true, false, false, false, false, [6, 6], []);
    node1.connected.push("none", node2, "none", "none");
    node2.connected.push("none", node3, node8, node1);
    node3.connected.push("none", "none", "none", node2);
    node4.connected.push("none", node5, node10, "none");
    node5.connected.push("none", node6, node11, node4);
    node6.connected.push("none", "none", "none", node5);
    node7.connected.push("none", node8, node12, "none");
    node8.connected.push(node2, "none", "none", node7);
    node9.connected.push("none", node10, node15, "none");
    node10.connected.push(node4, "none", "none", node9);
    node11.connected.push(node5, node12, "none", "none");
    node12.connected.push("none", "none", node18, node11);
    node13.connected.push(node7, "none", node19, "none");
    node14.connected.push("none", node15, node20, "none");
    node15.connected.push(node9, "none", "none", node14);
    node16.connected.push("none", node17, node22, "none");
    node17.connected.push("none", node18, "none", node16);
    node18.connected.push(node12, "none", node24, node17);
    node19.connected.push(node13, node20, node25, "none");
    node20.connected.push(node14, "none", "none", node19);
    node21.connected.push("none", node22, node27, "none");
    node22.connected.push(node16, "none", "none", node21);
    node23.connected.push("none", "none", node29, "none");
    node24.connected.push(node18, "none", node30, "none");
    node25.connected.push(node19, "none", node31, "none");
    node26.connected.push("none", "none", node32, "none");
    node27.connected.push(node21, "none", node33, "none");
    node28.connected.push("none", node29, node34, "none");
    node29.connected.push(node23, "none", "none", node28);
    node30.connected.push(node24, "none", node36, "none");
    node31.connected.push(node25, "none", "none", "none");
    node32.connected.push(node26, node33, "none", "none");
    node33.connected.push(node27, "none", "none", node32);
    node34.connected.push(node28, node35, "none", "none");
    node35.connected.push("none", node36, "none", node34);
    node36.connected.push(node30, "none", "none", node35);
    maze2 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

function initMaze3() {
    var node1 = new Node(false, true, true, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, true, false, true, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, false, true, true, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, false, true, false, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, true, false, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, true, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(true, false, false, false, true, false, false, false, [2, 1], []);
    var node8 = new Node(false, false, true, false, false, false, false, false, [2, 2], []);
    var node9 = new Node(true, false, true, false, false, false, false, false, [2, 3], []);
    var node10 = new Node(true, true, false, false, false, false, false, false, [2, 4], []);
    var node11 = new Node(true, false, false, true, false, false, false, false, [2, 5], []);
    var node12 = new Node(true, false, true, false, false, false, false, false, [2, 6], []);
    var node13 = new Node(false, true, true, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(true, false, true, true, false, false, false, false, [3, 2], []);
    var node15 = new Node(true, false, true, false, false, false, false, false, [3, 3], []);
    var node16 = new Node(false, true, true, false, false, false, false, false, [3, 4], []);
    var node17 = new Node(false, false, true, true, false, false, false, false, [3, 5], []);
    var node18 = new Node(true, false, true, false, true, false, false, false, [3, 6], []);
    var node19 = new Node(true, false, true, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(true, false, true, false, false, false, false, false, [4, 2], []);
    var node21 = new Node(true, false, true, false, false, false, false, false, [4, 3], []);
    var node22 = new Node(true, false, true, false, false, false, false, false, [4, 4], []);
    var node23 = new Node(true, false, true, false, false, false, false, false, [4, 5], []);
    var node24 = new Node(true, false, true, false, false, false, false, false, [4, 6], []);
    var node25 = new Node(true, false, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(true, true, false, false, false, false, false, false, [5, 2], []);
    var node27 = new Node(true, false, false, true, false, false, false, false, [5, 3], []);
    var node28 = new Node(true, false, true, false, false, false, false, false, [5, 4], []);
    var node29 = new Node(true, false, true, false, false, false, false, false, [5, 5], []);
    var node30 = new Node(true, false, true, false, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, true, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(false, true, false, true, false, false, false, false, [6, 2], []);
    var node33 = new Node(false, true, false, true, false, false, false, false, [6, 3], []);
    var node34 = new Node(true, false, false, true, false, false, false, false, [6, 4], []);
    var node35 = new Node(true, true, false, false, false, false, false, false, [6, 5], []);
    var node36 = new Node(true, false, false, true, false, false, false, false, [6, 6], []);
    node1.connected.push("none", node2, node7, "none");
    node2.connected.push("none", node3, "none", node1);
    node3.connected.push("none", "none", node9, node2);
    node4.connected.push("none", "none", node10, "none");
    node5.connected.push("none", node6, node11, "none");
    node6.connected.push("none", "none", node12, node5);
    node7.connected.push(node1, "none", "none", "none");
    node8.connected.push("none", "none", node14, "none");
    node9.connected.push(node3, "none", node15, "none");
    node10.connected.push(node4, node11, "none", "none");
    node11.connected.push(node5, "none", "none", node10);
    node12.connected.push(node6, "none", node18, "none");
    node13.connected.push("none", node14, node19, "none");
    node14.connected.push(node8, "none", node20, node13);
    node15.connected.push(node9, "none", node21, "none");
    node16.connected.push("none", node17, node22, "none");
    node17.connected.push("none", "none", node23, node16);
    node18.connected.push(node12, "none", node24, "none");
    node19.connected.push(node13, "none", node25, "none");
    node20.connected.push(node14, "none", node26, "none");
    node21.connected.push(node15, "none", node27, "none");
    node22.connected.push(node16, "none", node28, "none");
    node23.connected.push(node17, "none", node29, "none");
    node24.connected.push(node18, "none", node30, "none");
    node25.connected.push(node19, "none", node31, "none");
    node26.connected.push(node20, node27, "none", "none");
    node27.connected.push(node21, "none", "none", node26);
    node28.connected.push(node22, "none", node34, "none");
    node29.connected.push(node23, "none", node35, "none");
    node30.connected.push(node24, "none", node36, "none");
    node31.connected.push(node25, node32, "none", "none");
    node32.connected.push("none", node33, "none", node31);
    node33.connected.push("none", node34, "none", node32);
    node34.connected.push(node28, "none", "none", node33);
    node35.connected.push(node29, node36, "none", "none");
    node36.connected.push(node30, "none", "none", node35);
    maze3 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

function initMaze4() {
    var node1 = new Node(false, true, true, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, false, true, true, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, true, false, false, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, true, false, true, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, false, true, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, true, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(true, false, true, false, true, false, false, false, [2, 1], []);
    var node8 = new Node(true, false, true, false, false, false, false, false, [2, 2], []);
    var node9 = new Node(false, true, true, false, false, false, false, false, [2, 3], []);
    var node10 = new Node(false, true, false, true, false, false, false, false, [2, 4], []);
    var node11 = new Node(false, true, false, true, false, false, false, false, [2, 5], []);
    var node12 = new Node(true, false, true, true, false, false, false, false, [2, 6], []);
    var node13 = new Node(true, false, true, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(true, true, false, false, false, false, false, false, [3, 2], []);
    var node15 = new Node(true, false, false, true, false, false, false, false, [3, 3], []);
    var node16 = new Node(false, true, true, false, false, false, false, false, [3, 4], []);
    var node17 = new Node(false, false, false, true, false, false, false, false, [3, 5], []);
    var node18 = new Node(true, false, true, false, true, false, false, false, [3, 6], []);
    var node19 = new Node(true, false, true, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(false, true, false, false, false, false, false, false, [4, 2], []);
    var node21 = new Node(false, true, false, true, false, false, false, false, [4, 3], []);
    var node22 = new Node(true, true, false, true, false, false, false, false, [4, 4], []);
    var node23 = new Node(false, true, false, true, false, false, false, false, [4, 5], []);
    var node24 = new Node(true, false, true, true, false, false, false, false, [4, 6], []);
    var node25 = new Node(true, true, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(false, true, false, true, false, false, false, false, [5, 2], []);
    var node27 = new Node(false, true, false, true, false, false, false, false, [5, 3], []);
    var node28 = new Node(false, true, false, true, false, false, false, false, [5, 4], []);
    var node29 = new Node(false, false, true, true, false, false, false, false, [5, 5], []);
    var node30 = new Node(true, false, true, false, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, true, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(false, true, false, true, false, false, false, false, [6, 2], []);
    var node33 = new Node(false, false, false, true, false, false, false, false, [6, 3], []);
    var node34 = new Node(false, true, false, false, false, false, false, false, [6, 4], []);
    var node35 = new Node(true, false, false, true, false, false, false, false, [6, 5], []);
    var node36 = new Node(true, false, false, false, false, false, false, false, [6, 6], []);
    node1.connected.push("none", node2, node7, "none");
    node2.connected.push("none", "none", node8, node1);
    node3.connected.push("none", node4, "none", "none");
    node4.connected.push("none", node5, "none", node3);
    node5.connected.push("none", node6, "none", node4);
    node6.connected.push("none", "none", node12, node5);
    node7.connected.push(node1, "none", node13, "none");
    node8.connected.push(node2, "none", node14, "none");
    node9.connected.push("none", node10, node15, "none");
    node10.connected.push("none", node11, "none", node9);
    node11.connected.push("none", node12, "none", node10);
    node12.connected.push(node6, "none", node18, node11);
    node13.connected.push(node7, "none", node19, "none");
    node14.connected.push(node8, node15, "none", "none");
    node15.connected.push(node9, "none", "none", node14);
    node16.connected.push("none", node17, node22, "none");
    node17.connected.push("none", "none", "none", node16);
    node18.connected.push(node12, "none", node24, "none");
    node19.connected.push(node13, "none", node25, "none");
    node20.connected.push("none", node21, "none", "none");
    node21.connected.push("none", node22, "none", node20);
    node22.connected.push(node16, node23, "none", node21);
    node23.connected.push("none", node24, "none", node22);
    node24.connected.push(node12, "none", node30, node23);
    node25.connected.push(node19, node26, node31, "none");
    node26.connected.push("none", node27, "none", node25);
    node27.connected.push("none", node28, "none", node26);
    node28.connected.push("none", node29, "none", node27);
    node29.connected.push("none", "none", node35, node28);
    node30.connected.push(node24, "none", node36, "none");
    node31.connected.push(node25, node32, "none", "none");
    node32.connected.push("none", node33, "none", node31);
    node33.connected.push("none", "none", "none", node32);
    node34.connected.push("none", node35, "none", "none");
    node35.connected.push(node29, "none", "none", node34);
    node36.connected.push(node30, "none", "none", "none");
    maze4 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

function initMaze5() {
    var node1 = new Node(false, true, false, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, true, false, true, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, true, false, true, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, true, false, true, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, true, true, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, true, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(false, true, true, false, true, false, false, false, [2, 1], []);
    var node8 = new Node(false, true, false, true, false, false, false, false, [2, 2], []);
    var node9 = new Node(false, true, false, true, false, false, false, false, [2, 3], []);
    var node10 = new Node(false, true, true, true, false, false, false, false, [2, 4], []);
    var node11 = new Node(true, false, false, true, false, false, false, false, [2, 5], []);
    var node12 = new Node(true, false, false, false, false, false, false, false, [2, 6], []);
    var node13 = new Node(true, true, true, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(false, false, true, true, false, false, false, false, [3, 2], []);
    var node15 = new Node(false, true, false, false, false, false, false, false, [3, 3], []);
    var node16 = new Node(true, false, false, true, false, false, false, false, [3, 4], []);
    var node17 = new Node(false, true, true, false, false, false, false, false, [3, 5], []);
    var node18 = new Node(false, false, true, true, true, false, false, false, [3, 6], []);
    var node19 = new Node(true, false, true, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(true, true, false, false, false, false, false, false, [4, 2], []);
    var node21 = new Node(false, true, false, true, false, false, false, false, [4, 3], []);
    var node22 = new Node(false, false, true, true, false, false, false, false, [4, 4], []);
    var node23 = new Node(true, false, false, false, false, false, false, false, [4, 5], []);
    var node24 = new Node(true, false, true, false, false, false, false, false, [4, 6], []);
    var node25 = new Node(true, false, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(false, true, true, false, false, false, false, false, [5, 2], []);
    var node27 = new Node(false, true, false, true, false, false, false, false, [5, 3], []);
    var node28 = new Node(true, true, false, true, false, false, false, false, [5, 4], []);
    var node29 = new Node(false, false, false, true, false, false, false, false, [5, 5], []);
    var node30 = new Node(true, false, true, false, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, false, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(true, true, false, false, false, false, false, false, [6, 2], []);
    var node33 = new Node(false, true, false, true, false, false, false, false, [6, 3], []);
    var node34 = new Node(false, true, false, true, false, false, false, false, [6, 4], []);
    var node35 = new Node(false, true, false, true, false, false, false, false, [6, 5], []);
    var node36 = new Node(true, false, false, true, false, false, false, false, [6, 6], []);
    node1.connected.push("none", node2, "none", "none");
    node2.connected.push("none", node3, "none", node1);
    node3.connected.push("none", node4, "none", node2);
    node4.connected.push("none", node5, "none", node3);
    node5.connected.push("none", node6, node11, node4);
    node6.connected.push("none", "none", node12, node5);
    node7.connected.push("none", node8, node13, "none");
    node8.connected.push("none", node9, "none", node7);
    node9.connected.push("none", node10, "none", node8);
    node10.connected.push("none", node11, node16, node9);
    node11.connected.push(node5, "none", "none", node10);
    node12.connected.push(node6, "none", "none", "none");
    node13.connected.push(node7, node14, node19, "none");
    node14.connected.push("none", "none", node20, node13);
    node15.connected.push("none", node16, "none", "none");
    node16.connected.push(node10, "none", "none", node15);
    node17.connected.push("none", node18, node23, "none");
    node18.connected.push("none", "none", node24, node17);
    node19.connected.push(node13, "none", node25, "none");
    node20.connected.push(node14, node21, "none", "none");
    node21.connected.push("none", node22, "none", node20);
    node22.connected.push("none", "none", node28, node21);
    node23.connected.push(node17, "none", "none", "none");
    node24.connected.push(node18, "none", node30, "none");
    node25.connected.push(node19, "none", node31, "none");
    node26.connected.push("none", node27, node32, "none");
    node27.connected.push("none", node28, "none", node26);
    node28.connected.push(node22, node29, "none", node27);
    node29.connected.push("none", "none", "none", node28);
    node30.connected.push(node24, "none", node36, "none");
    node31.connected.push(node25, "none", "none", "none");
    node32.connected.push(node26, node33, "none", "none");
    node33.connected.push("none", node34, "none", node32);
    node34.connected.push("none", node35, "none", node33);
    node35.connected.push("none", node36, "none", node34);
    node36.connected.push(node30, "none", "none", node35);
    maze5 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

function initMaze6() {
    var node1 = new Node(false, false, true, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, true, true, false, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, false, true, true, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, true, false, false, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, true, true, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, true, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(true, false, true, false, false, false, false, false, [2, 1], []);
    var node8 = new Node(true, false, true, false, false, false, false, false, [2, 2], []);
    var node9 = new Node(true, false, true, false, false, false, false, false, [2, 3], []);
    var node10 = new Node(false, true, true, false, false, false, false, false, [2, 4], []);
    var node11 = new Node(true, false, false, true, false, false, false, false, [2, 5], []);
    var node12 = new Node(true, false, true, false, false, false, false, false, [2, 6], []);
    var node13 = new Node(true, true, true, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(true, false, false, true, false, false, false, false, [3, 2], []);
    var node15 = new Node(true, false, false, false, false, false, false, false, [3, 3], []);
    var node16 = new Node(true, false, true, false, false, false, false, false, [3, 4], []);
    var node17 = new Node(false, true, true, false, false, false, false, false, [3, 5], []);
    var node18 = new Node(true, false, false, true, false, false, false, false, [3, 6], []);
    var node19 = new Node(true, true, false, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(false, false, true, true, false, false, false, false, [4, 2], []);
    var node21 = new Node(false, true, true, false, false, false, false, false, [4, 3], []);
    var node22 = new Node(true, false, true, true, false, false, false, false, [4, 4], []);
    var node23 = new Node(true, false, true, false, false, false, false, false, [4, 5], []);
    var node24 = new Node(false, false, true, false, false, false, false, false, [4, 6], []);
    var node25 = new Node(false, true, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(true, false, false, true, false, false, false, false, [5, 2], []);
    var node27 = new Node(true, false, false, false, false, false, false, false, [5, 3], []);
    var node28 = new Node(true, false, true, false, false, false, false, false, [5, 4], []);
    var node29 = new Node(true, true, false, false, false, false, false, false, [5, 5], []);
    var node30 = new Node(true, false, true, true, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, true, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(false, true, false, true, false, false, false, false, [6, 2], []);
    var node33 = new Node(false, true, false, true, false, false, false, false, [6, 3], []);
    var node34 = new Node(true, false, false, true, false, false, false, false, [6, 4], []);
    var node35 = new Node(false, true, false, false, false, false, false, false, [6, 5], []);
    var node36 = new Node(true, false, false, true, false, false, false, false, [6, 6], []);
    node1.connected.push("none", "none", node7, "none");
    node2.connected.push("none", node3, node8, "none");
    node3.connected.push("none", "none", node9, node2);
    node4.connected.push("none", node5, "none", "none");
    node5.connected.push("none", node6, node11, node4);
    node6.connected.push("none", "none", node12, node5);
    node7.connected.push(node1, "none", node13, "none");
    node8.connected.push(node2, "none", node14, "none");
    node9.connected.push(node3, "none", node15, "none");
    node10.connected.push("none", node11, node16, "none");
    node11.connected.push(node5, "none", "none", node10);
    node12.connected.push(node6, "none", node18, "none");
    node13.connected.push(node7, node14, node19, "none");
    node14.connected.push(node8, "none", "none", node13);
    node15.connected.push(node9, "none", "none", "none");
    node16.connected.push(node10, "none", node22, "none");
    node17.connected.push("none", node18, node23, "none");
    node18.connected.push(node12, "none", "none", node17);
    node19.connected.push(node13, node20, "none", "none");
    node20.connected.push("none", "none", node26, node19);
    node21.connected.push("none", node22, node27, "none");
    node22.connected.push(node16, "none", node28, node21);
    node23.connected.push(node17, "none", node29, "none");
    node24.connected.push("none", "none", node30, "none");
    node25.connected.push("none", node26, node31, "none");
    node26.connected.push(node20, "none", "none", node25);
    node27.connected.push(node21, "none", "none", "none");
    node28.connected.push(node22, "none", node34, "none");
    node29.connected.push(node23, node30, "none", "none");
    node30.connected.push(node24, "none", node36, node29);
    node31.connected.push(node25, node32, "none", "none");
    node32.connected.push("none", node33, "none", node31);
    node33.connected.push("none", node34, "none", node32);
    node34.connected.push(node28, "none", "none", node33);
    node35.connected.push("none", node36, "none", "none");
    node36.connected.push(node30, "none", "none", node35);
    maze6 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

function initMaze7() {
    var node1 = new Node(false, true, true, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, true, false, true, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, true, false, true, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, false, true, true, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, true, false, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, true, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(true, false, true, false, false, false, false, false, [2, 1], []);
    var node8 = new Node(false, true, true, false, false, false, false, false, [2, 2], []);
    var node9 = new Node(false, false, false, true, false, false, false, false, [2, 3], []);
    var node10 = new Node(true, true, false, false, false, false, false, false, [2, 4], []);
    var node11 = new Node(true, false, false, true, false, false, false, false, [2, 5], []);
    var node12 = new Node(true, false, true, false, false, false, false, false, [2, 6], []);
    var node13 = new Node(true, true, false, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(true, false, false, true, false, false, false, false, [3, 2], []);
    var node15 = new Node(false, true, true, false, false, false, false, false, [3, 3], []);
    var node16 = new Node(false, false, false, true, false, false, false, false, [3, 4], []);
    var node17 = new Node(false, true, true, false, false, false, false, false, [3, 5], []);
    var node18 = new Node(true, false, false, true, false, false, false, false, [3, 6], []);
    var node19 = new Node(false, true, true, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(false, false, true, true, false, false, false, false, [4, 2], []);
    var node21 = new Node(true, true, true, false, false, false, false, false, [4, 3], []);
    var node22 = new Node(false, true, false, true, false, false, false, false, [4, 4], []);
    var node23 = new Node(true, false, false, true, false, false, false, false, [4, 5], []);
    var node24 = new Node(false, false, true, false, false, false, false, false, [4, 6], []);
    var node25 = new Node(true, false, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(true, false, false, false, false, false, false, false, [5, 2], []);
    var node27 = new Node(true, true, false, false, false, false, false, false, [5, 3], []);
    var node28 = new Node(false, true, false, true, false, false, false, false, [5, 4], []);
    var node29 = new Node(false, false, true, true, false, false, false, false, [5, 5], []);
    var node30 = new Node(true, false, true, false, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, true, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(false, true, false, true, false, false, false, false, [6, 2], []);
    var node33 = new Node(false, true, false, true, false, false, false, false, [6, 3], []);
    var node34 = new Node(false, true, false, true, false, false, false, false, [6, 4], []);
    var node35 = new Node(true, true, false, true, false, false, false, false, [6, 5], []);
    var node36 = new Node(true, false, false, true, false, false, false, false, [6, 6], []);
    node1.connected.push("none", node2, node7, "none");
    node2.connected.push("none", node3, "none", node1);
    node3.connected.push("none", node4, "none", node2);
    node4.connected.push("none", "none", node10, node3);
    node5.connected.push("none", node6, node11, "none");
    node6.connected.push("none", "none", node12, node5);
    node7.connected.push(node1, "none", node13, "none");
    node8.connected.push("none", node9, node14, "none");
    node9.connected.push("none", "none", "none", node8);
    node10.connected.push(node4, node11, "none", "none");
    node11.connected.push(node5, "none", "none", node10);
    node12.connected.push(node6, "none", node18, "none");
    node13.connected.push(node7, node14, "none", "none");
    node14.connected.push(node8, "none", "none", node13);
    node15.connected.push("none", node16, node21, "none");
    node16.connected.push("none", "none", "none", node15);
    node17.connected.push("none", node18, node23, "none");
    node18.connected.push(node12, "none", "none", node17);
    node19.connected.push("none", node20, node25, "none");
    node20.connected.push("none", "none", node26, node25);
    node21.connected.push(node15, node22, node27, "none");
    node22.connected.push("none", node23, "none", node21);
    node23.connected.push(node17, "none", "none", node22);
    node24.connected.push("none", "none", node30, "none");
    node25.connected.push(node19, "none", node31, "none");
    node26.connected.push(node20, "none", "none", "none");
    node27.connected.push(node21, node28, "none", "none");
    node28.connected.push("none", node29, "none", node27);
    node29.connected.push("none", "none", node35, node28);
    node30.connected.push(node24, "none", node36, "none");
    node31.connected.push(node25, node32, "none", "none");
    node32.connected.push("none", node33, "none", node31);
    node33.connected.push("none", node34, "none", node32);
    node34.connected.push("none", node35, "none", node33);
    node35.connected.push(node29, node36, "none", node34);
    node36.connected.push(node30, "none", "none", node35);
    maze7 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

function initMaze8() {
    var node1 = new Node(false, false, true, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, true, true, false, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, true, false, true, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, false, true, true, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, true, false, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, true, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(true, true, true, false, false, false, false, false, [2, 1], []);
    var node8 = new Node(true, true, false, true, false, false, false, false, [2, 2], []);
    var node9 = new Node(false, false, false, true, false, false, false, false, [2, 3], []);
    var node10 = new Node(true, true, false, false, false, false, false, false, [2, 4], []);
    var node11 = new Node(true, false, false, true, false, false, false, false, [2, 5], []);
    var node12 = new Node(true, false, true, false, false, false, false, false, [2, 6], []);
    var node13 = new Node(true, false, true, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(false, true, true, false, false, false, false, false, [3, 2], []);
    var node15 = new Node(false, true, false, true, false, false, false, false, [3, 3], []);
    var node16 = new Node(false, true, false, true, false, false, false, false, [3, 4], []);
    var node17 = new Node(false, false, true, true, false, false, false, false, [3, 5], []);
    var node18 = new Node(true, false, true, false, false, false, false, false, [3, 6], []);
    var node19 = new Node(true, false, true, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(true, true, false, false, false, false, false, false, [4, 2], []);
    var node21 = new Node(false, false, true, true, false, false, false, false, [4, 3], []);
    var node22 = new Node(false, true, false, false, false, false, false, false, [4, 4], []);
    var node23 = new Node(true, true, false, true, false, false, false, false, [4, 5], []);
    var node24 = new Node(true, false, false, true, false, false, false, false, [4, 6], []);
    var node25 = new Node(true, false, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(false, false, true, false, false, false, false, false, [5, 2], []);
    var node27 = new Node(true, true, false, false, false, false, false, false, [5, 3], []);
    var node28 = new Node(false, true, false, true, false, false, false, false, [5, 4], []);
    var node29 = new Node(false, true, false, true, false, false, false, false, [5, 5], []);
    var node30 = new Node(false, false, false, true, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, true, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(true, true, false, true, false, false, false, false, [6, 2], []);
    var node33 = new Node(false, true, false, true, false, false, false, false, [6, 3], []);
    var node34 = new Node(false, true, false, true, false, false, false, false, [6, 4], []);
    var node35 = new Node(false, true, false, true, false, false, false, false, [6, 5], []);
    var node36 = new Node(false, false, false, true, false, false, false, false, [6, 6], []);
    node1.connected.push("none", "none", node7, "none");
    node2.connected.push("none", node3, node8, "none");
    node3.connected.push("none", node4, "none", node2);
    node4.connected.push("none", "none", node10, node3);
    node5.connected.push("none", node6, node11, "none");
    node6.connected.push("none", "none", node12, node5);
    node7.connected.push(node1, node8, node13, "none");
    node8.connected.push(node2, node9, "none", node7);
    node9.connected.push("none", "none", "none", node8);
    node10.connected.push(node4, node11, "none", "none");
    node11.connected.push(node5, "none", "none", node10);
    node12.connected.push(node6, "none", node18, "none");
    node13.connected.push(node7, "none", node19, "none");
    node14.connected.push("none", node15, node20, "none");
    node15.connected.push("none", node16, "none", node14);
    node16.connected.push("none", node17, "none", node15);
    node17.connected.push("none", "none", node23, node16);
    node18.connected.push(node12, "none", node24, "none");
    node19.connected.push(node13, "none", node25, "none");
    node20.connected.push(node14, node21, "none", "none");
    node21.connected.push("none", "none", node27, node20);
    node22.connected.push("none", node23, "none", "none");
    node23.connected.push(node17, node24, "none", node22);
    node24.connected.push(node12, "none", "none", node23);
    node25.connected.push(node19, "none", node31, "none");
    node26.connected.push("none", "none", node32, "none");
    node27.connected.push(node21, node28, "none", "none");
    node28.connected.push("none", node29, "none", node27);
    node29.connected.push("none", node30, "none", node28);
    node30.connected.push("none", "none", "none", node29);
    node31.connected.push(node25, node32, "none", "none");
    node32.connected.push(node26, node33, "none", node31);
    node33.connected.push("none", node34, "none", node32);
    node34.connected.push("none", node35, "none", node33);
    node35.connected.push("none", node36, "none", node34);
    node36.connected.push("none", "none", "none", node35);
    maze8 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

function initMaze9() {
    var node1 = new Node(false, false, true, false, false, false, false, false, [1, 1], []);
    var node2 = new Node(false, true, true, false, false, false, false, false, [1, 2], []);
    var node3 = new Node(false, true, false, true, false, false, false, false, [1, 3], []);
    var node4 = new Node(false, true, false, true, false, false, false, false, [1, 4], []);
    var node5 = new Node(false, true, true, true, false, false, false, false, [1, 5], []);
    var node6 = new Node(false, false, true, true, false, false, false, false, [1, 6], []);
    var node7 = new Node(true, false, true, false, false, false, false, false, [2, 1], []);
    var node8 = new Node(true, false, true, false, false, false, false, false, [2, 2], []);
    var node9 = new Node(false, true, true, false, false, false, false, false, [2, 3], []);
    var node10 = new Node(false, false, false, true, false, false, false, false, [2, 4], []);
    var node11 = new Node(true, false, true, false, false, false, false, false, [2, 5], []);
    var node12 = new Node(true, false, true, false, false, false, false, false, [2, 6], []);
    var node13 = new Node(true, true, true, false, false, false, false, false, [3, 1], []);
    var node14 = new Node(true, true, false, true, false, false, false, false, [3, 2], []);
    var node15 = new Node(true, false, false, true, false, false, false, false, [3, 3], []);
    var node16 = new Node(false, true, true, false, false, false, false, false, [3, 4], []);
    var node17 = new Node(true, false, false, true, false, false, false, false, [3, 5], []);
    var node18 = new Node(true, false, true, false, false, false, false, false, [3, 6], []);
    var node19 = new Node(true, false, true, false, false, false, false, false, [4, 1], []);
    var node20 = new Node(false, false, true, false, false, false, false, false, [4, 2], []);
    var node21 = new Node(false, true, true, false, false, false, false, false, [4, 3], []);
    var node22 = new Node(true, false, false, true, false, false, false, false, [4, 4], []);
    var node23 = new Node(false, true, false, false, false, false, false, false, [4, 5], []);
    var node24 = new Node(true, false, true, true, false, false, false, false, [4, 6], []);
    var node25 = new Node(true, false, true, false, false, false, false, false, [5, 1], []);
    var node26 = new Node(true, false, true, false, false, false, false, false, [5, 2], []);
    var node27 = new Node(true, false, true, false, false, false, false, false, [5, 3], []);
    var node28 = new Node(false, true, true, false, false, false, false, false, [5, 4], []);
    var node29 = new Node(false, false, true, true, false, false, false, false, [5, 5], []);
    var node30 = new Node(true, false, false, false, false, false, false, false, [5, 6], []);
    var node31 = new Node(true, true, false, false, false, false, false, false, [6, 1], []);
    var node32 = new Node(true, false, false, true, false, false, false, false, [6, 2], []);
    var node33 = new Node(true, true, false, false, false, false, false, false, [6, 3], []);
    var node34 = new Node(true, false, false, true, false, false, false, false, [6, 4], []);
    var node35 = new Node(true, true, false, false, false, false, false, false, [6, 5], []);
    var node36 = new Node(false, false, false, true, false, false, false, false, [6, 6], []);
    node1.connected.push("none", "none", node7, "none");
    node2.connected.push("none", node3, node8, "none");
    node3.connected.push("none", node4, "none", node2);
    node4.connected.push("none", node5, "none", node3);
    node5.connected.push("none", node6, node11, node4);
    node6.connected.push("none", "none", node12, node5);
    node7.connected.push(node1, "none", node13, "none");
    node8.connected.push(node2, "none", node14, "none");
    node9.connected.push("none", node10, node15, "none");
    node10.connected.push("none", "none", "none", node9);
    node11.connected.push(node5, "none", node17, "none");
    node12.connected.push(node6, "none", node18, "none");
    node13.connected.push(node7, node14, node19, "none");
    node14.connected.push(node8, node15, "none", node13);
    node15.connected.push(node9, "none", "none", node14);
    node16.connected.push("none", node17, node22, "none");
    node17.connected.push(node11, "none", "none", node16);
    node18.connected.push(node12, "none", node24, "none");
    node19.connected.push(node13, "none", node25, "none");
    node20.connected.push("none", "none", node26, "none");
    node21.connected.push("none", node22, node27, "none");
    node22.connected.push(node16, "none", "none", node21);
    node23.connected.push("none", node24, "none", "none");
    node24.connected.push(node18, "none", node30, node23);
    node25.connected.push(node19, "none", node31, "none");
    node26.connected.push(node20, "none", node32, "none");
    node27.connected.push(node21, "none", node33, "none");
    node28.connected.push("none", node29, node34, "none");
    node29.connected.push("none", "none", node35, node28);
    node30.connected.push(node24, "none", "none", "none");
    node31.connected.push(node25, node32, "none", "none");
    node32.connected.push(node26, "none", "none", node31);
    node33.connected.push(node27, node34, "none", "none");
    node34.connected.push(node28, "none", "none", node33);
    node35.connected.push(node29, node36, "none", "none");
    node36.connected.push("none", "none", "none", node35);
    maze9 = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30, node31, node32, node33, node34, node35, node36];
}

initMaze1();
initMaze2();
initMaze3();
initMaze4();
initMaze5();
initMaze6();
initMaze7();
initMaze8();
initMaze9();
// mazeSolver(maze9, maze9[0], maze9[35]);

function mazeSolver(maze, start, end) {
    var complete = [], current = start, temp = [], x = false;
    complete.push(current);
    while(current != end) {
    // for(var j = 0; j < 200; j++) {
        current.checked = true;
        if(current.up === true && current.connected[0] != "none" && current.connected[0].checked != true) {
            for(var i = 0; i < 36; i++) {
                if((maze[i].coordinates[0] === current.coordinates[0]-1) && (maze[i].coordinates[1] === current.coordinates[1]) && (maze[i].checked === false)) {
                    current = maze[i];
                    complete.push(current);
                    temp.push("up");
                    break;
                }
            }
        } else if(current.right === true && current.connected[1] != "none" && current.connected[1].checked != true) {
            for(var i = 0; i < 36; i++) {
                if((maze[i].coordinates[0] === current.coordinates[0]) && (maze[i].coordinates[1] === current.coordinates[1]+1) && (maze[i].checked === false)) {
                    current = maze[i];
                    complete.push(current);
                    temp.push("right");
                    break;
                }
            }
        } else if(current.down === true && current.connected[2] != "none" && current.connected[2].checked != true) {
            for(var i = 0; i < 36; i++) {
                if((maze[i].coordinates[0] === current.coordinates[0]+1) && (maze[i].coordinates[1] === current.coordinates[1]) && (maze[i].checked === false)) {
                    current = maze[i];
                    complete.push(current);
                    temp.push("down");
                    break;
                }
            }
        } else if(current.left === true && current.connected[3] != "none" && current.connected[3].checked != true) {
            for(var i = 0; i < 36; i++) {
                if((maze[i].coordinates[0] === current.coordinates[0]) && (maze[i].coordinates[1] === current.coordinates[1]-1) && (maze[i].checked === false)) {
                    current = maze[i];
                    complete.push(current);
                    temp.push("left");
                    break;
                }
            }
        } else {
            complete.pop();
            temp.pop();
            current = complete[complete.length-1];
        }
    }
    console.log(temp);
    initMaze1();
    initMaze2();
    initMaze3();
    initMaze4();
    initMaze5();
    initMaze6();
    initMaze7();
    initMaze8();
    initMaze9();
    display_maze_result(temp);
}
