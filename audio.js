//pulsanti
const pluhButton = document.getElementById("pluh-button");
const vineBoomButton = document.getElementById("vine-boom-button");
const gongButton = document.getElementById("gong-button");
const metalPipeButton = document.getElementById("metal-pipe-button");
const awwHellNoButton = document.getElementById("aww-hell-no-button");
const iAmStupidButton = document.getElementById("i-am-stupid-button");

//audio
const pluhAudio = document.getElementById("pluh");
const vineBoomAudio = document.getElementById("vine-boom");
const gongAudio = document.getElementById("gong");
const metalPipeAudio = document.getElementById("metal-pipe");
const awwHellNoAudio = document.getElementById("aww-hell-no");
const iAmStupidAudio = document.getElementById("i-am-stupid");

//gestione dei click
pluhButton.addEventListener("click", async function () {
    await pluhAudio.play();
});

vineBoomButton.addEventListener("click", async function () {
    await vineBoomAudio.play();
});

gongButton.addEventListener("click", async function () {
    await gongAudio.play();
});

metalPipeButton.addEventListener("click", async function () {
    await metalPipeAudio.play();
});

awwHellNoButton.addEventListener("click", async function () {
    await awwHellNoAudio.play();
});

iAmStupidButton.addEventListener("click", async function () {
    await iAmStupidAudio.play();
});