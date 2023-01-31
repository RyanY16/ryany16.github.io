window.onload = function load() {
    toggleView("start", true);
    toggleView("game", false);
    toggleView("end", false);
}

function changeContent(id, text) {
    document.getElementById(id).textContent = text;
}

function toggleView(id, toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? "block": "none";
    element.style.display = display;
}

function startGame() {
    if (checkAtLeastOneRadio()) {
        score = 0;
        changeContent("score", "Score: " + score);
        time = 30;
        changeContent("time", "Time: " + time);
        document.getElementById("wanakana-input").value = "";
        
        toggleView("start", false);
        toggleView("end", false);
        toggleView("game", true);
        update(final);
        timerStatus = true;
        timer();
    } else {
        alert("Please select an option")
    }
}

function endGame() {
    listAdd(meaning, "unanswered");
    listAdd(reading, "unanswered");
    listAdd(kanji, "unanswered");
    toggleView("game", false);
    toggleView("end", true);
    changeContent("final_score", "Game over, your score is " + score);
    timerStatus = false;
}

function firstScreen() {
    toggleView("start", true);
    toggleView("end", false);
}

function checkAtLeastOneRadio() {
    var check = document.querySelector("input[name = 'selectWords']:checked");
    if (check != null) {
        return true;
    } else {
        return false;
    }
}

function getJson(input) {
    let name = "./json/" + input + "kanji.json"
    fetch(name)
    .then(res => res.json())
    .then(data => {
        final = data;
    })
}

function update(obj) {
    randNo = random(final);
    kanji = obj[randNo]["kanji"];
    reading = obj[randNo]["reading"];
    meaning = obj[randNo]["meaning"];
    changeContent("question", kanji);
}

function random(obj) {
    return Math.floor(Math.random() * obj.length);
}

function check() {
    let inputText = document.getElementById("wanakana-input");
    if (inputText.value == reading) {
        score ++;
        changeContent("score", "Score: " + score);
        listAdd(meaning, "correct");
        listAdd(reading, "correct");
        listAdd(kanji, "correct");
        inputText.value = "";
        update(final);
    } else if (inputText.value == "？") {
        listAdd(meaning, "incorrect");
        listAdd(reading, "incorrect");
        listAdd(kanji, "incorrect");
        inputText.value = "";
        update(final);
    } else if (inputText.value == "```") {
        endGame();
    }
}

function listAdd(item, correct) {
    var node = document.createElement("li");
    node.className = correct;
    
    node.appendChild(document.createTextNode(item));
    document.querySelector("ol").appendChild(node);
}

function timer() {
    time = 30;
    var timer = setTimeout(tick, 1000);
    function tick() {
        if (timerStatus) {
            time --;
            changeContent("time", "Time: " + time);
            if (time == 0) {
                clearTimeout(timer);
                endGame();
            } else {
                timer = setTimeout(tick, 1000);
            }
        }
    }
}

const buttons = document.querySelectorAll("input[type = 'radio']")
buttons.forEach(button => {
    button.onclick = () => {
        if (button.checked) {
            getJson(button.value);
        }
    }
})

let kanji, reading, meaning, randNo, final, results = "";
let score, answersCount  = 0;
let answers = {};
let time = 30;
let timerStatus = false;



var textInput = document.getElementById('wanakana-input');
wanakana.bind(textInput, /* options */); // uses IMEMode with toKana() as default
// to remove event listeners: wanakana.unbind(textInput);