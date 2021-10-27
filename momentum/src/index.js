import MomentumCore from "./js/MomentumCore.js";
import "./scss/style.scss";

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc.push(require(next));
    return acc;
  }, []);

let songsNames =  ["Plour - Sura", "Plour - Saratov reservoir", "Plour - Uglichskoye reservoir", "Plour - Vlaga"]

let playlist = importAll(require.context("/src/assets/music/", false, /\.(mp3)$/)).map((el, i) => ({songName: songsNames[i], src: el.default}));

let momentumCore = new MomentumCore("momentum-app");
momentumCore.addPlaylist(playlist);

console.log("Hello there!\nI ask you, to give me little more time on this task: crosscheck deadline -6 hours.\nIt took me some time to make kind of design in figma https://www.figma.com/file/XbzieAkmajuzg1zUpYOSIY/Momentum\nSo I have had less time on this, hope I will end this task");
console.log("Still in progress...");
console.log("Added after deadline:\nJS clock function\nMusic player, hide it button");