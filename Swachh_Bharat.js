function quit() {
    localStorage.removeItem("user name");
    window.location.replace("index.html");

}

function play() {
    window.location = "level1.html"
}

function howtoplay() {
    window.location = "how_to_play.html"
}