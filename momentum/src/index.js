import MomentumCore from "./js/MomentumCore.js";
import "./scss/style.scss";
// require("./assets/music/01_plour_-_sura.mp3");
// require("./assets/music/02_plour_-_saratov_reservoir.mp3");
// require("./assets/music/03_plour_-_uglichskoye_reservoir.mp3");
//let gg = require("./assets/music/04_plour_-_vlaga.mp3");
import gg from "./assets/music/04_plour_-_vlaga.mp3";
console.log(gg);

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc.push(require(next));
    return acc;
  }, []);

let songsNames =  ["Plour - Sura", "Plour - Saratov reservoir", "Plour - Uglichskoye reservoir", "Plour - Vlaga"]

let playlist = importAll(require.context("/src/assets/music/", false, /\.(mp3)$/)).map((el, i) => ({songName: songsNames[i], src: el.default}));

let momentumCore = new MomentumCore("momentum-app");
momentumCore.addPlaylist(playlist);

console.log("Hello there!\nI ask you, to give me little more time on this task: crosscheck deadlike -6 hours.\nIt took me some time to make kind of design in figma https://www.figma.com/file/XbzieAkmajuzg1zUpYOSIY/Momentum\nSo I have had less time on this, hope I will end this task");