class MusicPlayer {
  constructor(className) {
    this.parentClassName = className;
    this.className = 'music-player';

    this.playlist = [];
    this.currentTrack = 0;

    this.isPlaying = false;
    this.currentVolume = 1;
    this.currentPlayingTime = 0;
    this.audio = null;

    this.rooEl = document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0];

    this.controlButtonsEl = document.getElementsByClassName('control-buttons')[0];

    this.rooEl.getElementsByClassName('player-controls__button_play')[0].addEventListener('click', () => this.switchPlay());
    this.rooEl.getElementsByClassName('player-controls__button_prev')[0].addEventListener('click', () => this.prev());
    this.rooEl.getElementsByClassName('player-controls__button_next')[0].addEventListener('click', () => this.next());
    this.rooEl.getElementsByClassName('music-player__button-close')[0].addEventListener('click', () => {
      this.hidePlayer();
    });

    this.controlButtonsEl.getElementsByClassName('music-player__button-open')[0].addEventListener('click', () => {
      this.showPlayer();
    });

    this.rooEl.getElementsByClassName('player-controls__scroll')[0].addEventListener(
      'input',
      (e) => {
        this.scrollTrackTo(e.target.value);
      },
      false,
    );

    this.renderPlaylist();
  }

  hidePlayer() {
    this.rooEl.classList.add('music-player_hidden');
    this.controlButtonsEl.getElementsByClassName('music-player__button-open')[0].classList.remove('button-open_hidden');
  }

  showPlayer() {
    this.controlButtonsEl.getElementsByClassName('music-player__button-open')[0].classList.add('button-open_hidden');
    this.rooEl.classList.remove('music-player_hidden');
  }

  addToPlaylist(songName, src) {
    this.playlist.push({ songName, src });
  }

  setPlayList(playlist) {
    this.playlist = playlist;
    this.render();
    this.renderPlaylist();
  }

  cutString = (string, length) => {
    if (string.length > length) {
      return `${string.substring(0, length - 3)}...`;
    }
    return string;
  };

  scrollTrackTo(porc) {
    if (this.audio) {
      this.audio.currentTime = (this.audio.duration / 100) * porc;
      this.renderTrackPos(true);
    }
  }

  renderTrackPos(isSrcoll) {
    if (this.audio) {
      const proc = this.audio.currentTime / (this.audio.duration / 100);
      this.rooEl.getElementsByClassName(
        'player-controls__scroll',
      )[0].style.background = `linear-gradient(90deg, #eeeeee ${proc}%, #777777 ${proc}%)`;
      if (this.isPlaying && !isSrcoll) {
        setTimeout(() => this.renderTrackPos(), 1000);
      }
    } else {
      this.rooEl.getElementsByClassName('player-controls__scroll')[0].style.background = 'linear-gradient(90deg, #eeeeee 0%, #777777 0%)';
    }
  }

  render() {
    let somgName = 'No song avalible';
    somgName = this.cutString(this.playlist[this.currentTrack].songName, 22);
    this.rooEl.getElementsByClassName('player-controls__song-name')[0].innerText = somgName;
    if (this.isPlaying) {
      this.rooEl.getElementsByClassName('player-controls__button_play')[0].classList.add('player-controls__button_playing');
    } else {
      this.rooEl.getElementsByClassName('player-controls__button_play')[0].classList.remove('player-controls__button_playing');
    }
    this.renderTrackPos();
    this.renderPlaylist();
  }

  renderPlaylist() {
    this.rooEl.getElementsByClassName('player-playlist__songs-list')[0].innerHTML = '';

    if (this.playlist.length <= 4) {
      this.playlist.forEach((el, i) => {
        const playlistEl = document.createElement('p');
        playlistEl.innerText = this.cutString(el.songName, 25);
        playlistEl.classList.add('player-playlist__songs-list-element');
        playlistEl.addEventListener('click', () => {
          this.stop();
          this.currentTrack = i;
          this.switchPlay();
        });
        if (this.currentTrack === i) {
          playlistEl.classList.add('player-playlist__songs-list-element_playing');
        }
        this.rooEl.getElementsByClassName('player-playlist__songs-list')[0].appendChild(playlistEl);
      });
    }
  }

  switchPlay() {
    if (!this.isPlaying) {
      if (!this.audio) {
        this.audio = new Audio(this.playlist[this.currentTrack].src);
        this.audio.currentTime = 0;
        this.audio.addEventListener('ended', () => {
          this.next();
        });
      }
      this.audio.play();
      this.isPlaying = !this.isPlaying;
    } else {
      if (this.audio) {
        this.audio.pause();
      }
      this.isPlaying = !this.isPlaying;
    }

    this.render();
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    this.audio = null;
    this.isPlaying = false;
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  prev() {
    this.stop();
    if (this.currentTrack > 0) {
      this.currentTrack -= 1;
    } else {
      this.currentTrack = this.playlist.length - 1;
    }

    this.switchPlay();
  }

  next() {
    this.stop();
    if (this.currentTrack < this.playlist.length - 1) {
      this.currentTrack += 1;
    } else {
      this.currentTrack = 0;
    }
    this.switchPlay();
  }
}
module.exports = MusicPlayer;
