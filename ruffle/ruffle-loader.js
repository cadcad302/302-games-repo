const urlParameters = new URLSearchParams(window.location.search);
const gameURL = urlParameters.get('game')
window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load(`${gameURL}.swf`).then(() => {
         console.info("Ruffle successfully loaded the file");
    }).catch((e) => {
         console.error(`Ruffle failed to load the file: ${e}`);
    });

    player.style.height = "100vh";
    player.style.width = "100vh";
});
window.RufflePlayer.config = {
    "showSwfDownload": true,
    "splashScreen": false,
    "autoplay": "on",
    "unmuteOverlay": "hidden",
    "allowScriptAccess": true,
    "backgroundColor": "#000"
}
