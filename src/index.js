/* eslint-disable import/no-dynamic-require */
import MomentumCore from './js/MomentumCore';
import './scss/style.scss';

const importAll = (require) => (
  require.keys().reduce((acc, next) => {
    acc.push(require(next));
    return acc;
  }, []));

const songsNames = ['Plour - Sura', 'Plour - Saratov reservoir', 'Plour - Uglichskoye reservoir', 'Plour - Vlaga'];

const playlist = importAll(require.context('/src/assets/music/', false, /\.(mp3)$/)).map((el, i) => ({
  songName: songsNames[i],
  src: el.default,
}));

const momentumCore = new MomentumCore('momentum-app');
momentumCore.addPlaylist(playlist);
