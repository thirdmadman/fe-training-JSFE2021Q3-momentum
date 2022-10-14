!function(){var e={416:function(e){e.exports=class{constructor(){this.imageArray=[]}}},316:function(e){e.exports=class{constructor(e){this.parentClassName=e,this.className="configs",this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName("button-configs")[0].addEventListener("click",(()=>this.show()),!1),this.rooEl.getElementsByClassName("configs__button-close")[0].addEventListener("click",(()=>this.hide()),!1),this.hide(),this.configData=null,this.defaultConfigData={greetings:{name:"John Dove"},weatherForecast:{city:"New York"}}}hide(){this.rooEl.classList.add("configs_hidden")}show(){this.rooEl.classList.remove("configs_hidden"),this.showIputsData()}showIputsData(){this.rooEl.getElementsByClassName("group-configs__input-text_name")[0].value=this.configData.greetings.name,this.rooEl.getElementsByClassName("group-configs__input-text_city")[0].value=this.configData.weatherForecast.city}getIputsData(){try{this.configData.greetings.name=this.rooEl.getElementsByClassName("group-configs__input-text_name")[0].value,this.configData.weatherForecast.city=this.rooEl.getElementsByClassName("group-configs__input-text_city")[0].value}catch(e){localStorage.removeItem("momentumData"),console.error("Due exeption localStorage have been cleared"),this.loadData()}}loadData(){if(localStorage.getItem("momentumData")){const e=JSON.parse(localStorage.getItem("momentumData"));this.configData=Object.keys(e).length>0?e:this.defaultConfigData}else this.configData=this.defaultConfigData;return this.configData}save(){this.getIputsData(),localStorage.setItem("momentumData",JSON.stringify(this.configData))}}},875:function(e){e.exports=class{constructor(e){this.parentClassName=e,this.className="day-quote",this.defaultTitle="Quote of the day by ",this.defaultTitleWithRemimnder="Quote of the day (click for update) ",this.quotesArray=[{authorName:"No one",text:"You will never know what on the bottom of abyss, until you actually fall on this bottom"}],this.currentQuoteId=0,this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.rooEl.getElementsByClassName("day-quote__text")[0].addEventListener("click",(()=>this.nextQuote())),this.render(!0)}setQuotesArray(e){this.quotesArray=e,this.render(!0)}render(e){let t="";this.currentQuoteId=((e,t)=>{const s=Math.ceil(e),i=Math.floor(t);return Math.floor(Math.random()*(i-s))+s})(0,this.quotesArray.length),t=e?this.defaultTitleWithRemimnder:this.defaultTitle+this.quotesArray[this.currentQuoteId].authorName,this.rooEl.getElementsByClassName("day-quote__title")[0].innerText=t,this.rooEl.getElementsByClassName("day-quote__text")[0].innerText=this.quotesArray[this.currentQuoteId].text}nextQuote(){this.quotesArray.length>1&&this.quotesArray.length-1>this.currentQuoteId?this.currentQuoteId+=1:this.currentQuoteId=0,this.render()}}},508:function(e){e.exports=class{constructor(e){this.parentClassName=e,this.className="greetings",this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.show(),setTimeout((()=>this.hide()),3e3),this.rooEl.addEventListener("click",(()=>this.hide()),!1),this.userName="John Dove",this.greetingsText="Hello there,",this.render()}setUserName(e){this.userName=e,this.render()}timeTracker(){const e=(new Date).getHours();e>=6&&e<12?this.greetingsText="Good morning,":e>=12&&e<18?this.greetingsText="Good afternoon,":e>=18&&e<24?this.greetingsText="Good evening,":e>=0&&e<6&&(this.greetingsText="Good night,")}setGreetingsText(e){this.greetingsText=e,this.render()}render(){this.timeTracker();const e=this.rooEl.getElementsByClassName("greetings__text")[0],t=this.rooEl.getElementsByClassName("greetings__name")[0];e.innerText=this.greetingsText,t.innerText=this.userName}hide(){this.rooEl.classList.add("greetings_hidden")}show(){this.rooEl.classList.remove("greetings_hidden")}}},202:function(e){e.exports=class{constructor(e){this.parentClassName=e,this.className="date-time",this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.timeEl=this.rooEl.getElementsByClassName("date-time__time")[0],this.dateEl=this.rooEl.getElementsByClassName("date-time__date")[0],this.isActive=!0,this.is12hourTimeFormat=!1,this.locales="en-US",this.updateTime()}updateTime(){const e=new Date,t={hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:this.is12hourTimeFormat};this.dateEl.innerHTML=e.toLocaleString(this.locales,{weekday:"long",month:"long",day:"numeric"}),this.timeEl.innerHTML=e.toLocaleString(this.locales,t),this.isActive&&setTimeout((()=>this.updateTime()),1e3)}}},676:function(e,t,s){const i=s(202),r=s(416),a=s(289),n=s(875),o=s(714),l=s(508),h=s(316),c=s(536);e.exports=class{constructor(e){this.className=e,this.greetings=new l(this.className),this.clock=new i(this.className),this.backgroundProvider=new r,this.musicPlayer=new a(this.className),this.dayQuote=new n(this.className),c&&this.dayQuote.setQuotesArray(c),this.weatherForecast=new o(this.className),this.configs=new h(this.className),this.configData=this.configs.loadData(),this.setConfigs(),document.getElementsByClassName(this.className)[0].getElementsByClassName("configs__button-save")[0].addEventListener("click",(()=>{this.configs.save(),this.configData=this.configs.loadData(),this.setConfigs()}),!1)}addPlaylist(e){this.musicPlayer.setPlayList(e)}setConfigs(){this.configData&&(this.greetings.setUserName(this.configData.greetings.name),this.weatherForecast.setCity(this.configData.weatherForecast.city))}}},289:function(e){e.exports=class{constructor(e){var t,s,i;i=(e,t)=>e.length>t?`${e.substring(0,t-3)}...`:e,(s="cutString")in(t=this)?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i,this.parentClassName=e,this.className="music-player",this.playlist=[],this.currentTrack=0,this.isPlaying=!1,this.currentVolume=1,this.currentPlayingTime=0,this.audio=null,this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.controlButtonsEl=document.getElementsByClassName("control-buttons")[0],this.rooEl.getElementsByClassName("player-controls__button_play")[0].addEventListener("click",(()=>this.switchPlay())),this.rooEl.getElementsByClassName("player-controls__button_prev")[0].addEventListener("click",(()=>this.prev())),this.rooEl.getElementsByClassName("player-controls__button_next")[0].addEventListener("click",(()=>this.next())),this.rooEl.getElementsByClassName("music-player__button-close")[0].addEventListener("click",(()=>{this.hidePlayer()})),this.controlButtonsEl.getElementsByClassName("music-player__button-open")[0].addEventListener("click",(()=>{this.showPlayer()})),this.rooEl.getElementsByClassName("player-controls__scroll")[0].addEventListener("input",(e=>{this.scrollTrackTo(e.target.value)}),!1),this.renderPlaylist()}hidePlayer(){this.rooEl.classList.add("music-player_hidden"),this.controlButtonsEl.getElementsByClassName("music-player__button-open")[0].classList.remove("button-open_hidden")}showPlayer(){this.controlButtonsEl.getElementsByClassName("music-player__button-open")[0].classList.add("button-open_hidden"),this.rooEl.classList.remove("music-player_hidden")}addToPlaylist(e,t){this.playlist.push({songName:e,src:t})}setPlayList(e){this.playlist=e,this.render(),this.renderPlaylist()}scrollTrackTo(e){this.audio&&(this.audio.currentTime=this.audio.duration/100*e,this.renderTrackPos(!0))}renderTrackPos(e){if(this.audio){const t=this.audio.currentTime/(this.audio.duration/100);this.rooEl.getElementsByClassName("player-controls__scroll")[0].style.background=`linear-gradient(90deg, #eeeeee ${t}%, #777777 ${t}%)`,this.isPlaying&&!e&&setTimeout((()=>this.renderTrackPos()),1e3)}else this.rooEl.getElementsByClassName("player-controls__scroll")[0].style.background="linear-gradient(90deg, #eeeeee 0%, #777777 0%)"}render(){let e="No song avalible";e=this.cutString(this.playlist[this.currentTrack].songName,22),this.rooEl.getElementsByClassName("player-controls__song-name")[0].innerText=e,this.isPlaying?this.rooEl.getElementsByClassName("player-controls__button_play")[0].classList.add("player-controls__button_playing"):this.rooEl.getElementsByClassName("player-controls__button_play")[0].classList.remove("player-controls__button_playing"),this.renderTrackPos(),this.renderPlaylist()}renderPlaylist(){this.rooEl.getElementsByClassName("player-playlist__songs-list")[0].innerHTML="",this.playlist.length<=4&&this.playlist.forEach(((e,t)=>{const s=document.createElement("p");s.innerText=this.cutString(e.songName,25),s.classList.add("player-playlist__songs-list-element"),s.addEventListener("click",(()=>{this.stop(),this.currentTrack=t,this.switchPlay()})),this.currentTrack===t&&s.classList.add("player-playlist__songs-list-element_playing"),this.rooEl.getElementsByClassName("player-playlist__songs-list")[0].appendChild(s)}))}switchPlay(){this.isPlaying?(this.audio&&this.audio.pause(),this.isPlaying=!this.isPlaying):(this.audio||(this.audio=new Audio(this.playlist[this.currentTrack].src),this.audio.currentTime=0,this.audio.addEventListener("ended",(()=>{this.next()}))),this.audio.play(),this.isPlaying=!this.isPlaying),this.render()}stop(){this.audio&&(this.audio.pause(),this.audio.currentTime=0),this.audio=null,this.isPlaying=!1}pause(){this.audio&&(this.audio.pause(),this.isPlaying=!1)}prev(){this.stop(),this.currentTrack>0?this.currentTrack-=1:this.currentTrack=this.playlist.length-1,this.switchPlay()}next(){this.stop(),this.currentTrack<this.playlist.length-1?this.currentTrack+=1:this.currentTrack=0,this.switchPlay()}}},714:function(e){e.exports=class{constructor(e){this.parentClassName=e,this.className="weather-forecast",this.city="Tolen",this.currentWeather={error:"",air:"Clouds of disasters",temp:1,hum:35,pres:748.9,windspeed:10,winddir:"West"},this.upcomingWeather={error:"",air:"Heavy rain of gore"},this.currentWeatherTitle="Current weather:",this.upcomingWeatherTitle="Upcoming weather:",this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.controlButtonsEl=document.getElementsByClassName("control-buttons")[0],this.rooEl.getElementsByClassName("weather-forecast__button-close")[0].addEventListener("click",(()=>this.hide())),this.controlButtonsEl.getElementsByClassName("weather-forecast__button-open")[0].addEventListener("click",(()=>this.show())),this.getCurrentWeather(),this.getupcomingWeather(),this.render()}setCity(e){this.city=e,this.getCurrentWeather(),this.getupcomingWeather(),this.render()}show(){this.controlButtonsEl.getElementsByClassName("weather-forecast__button-open")[0].classList.add("button-open_hidden"),this.rooEl.classList.remove("weather-forecast_hidden")}hide(){this.rooEl.classList.add("weather-forecast_hidden"),this.controlButtonsEl.getElementsByClassName("weather-forecast__button-open")[0].classList.remove("button-open_hidden")}getCurrentWeather(){const e=`https://api.weatherapi.com/v1/current.json?key=f00cf593acf646ed8fa191758212710&q=${this.city}`;fetch(e).then((e=>e.json())).then((e=>{e&&(e.error&&1006===e.error.code?this.currentWeather.error=e.error.message:(this.currentWeather.air=e.current.condition.text,this.currentWeather.temp=parseFloat(e.current.temp_c).toFixed(1),this.currentWeather.hum=parseFloat(e.current.humidity).toFixed(0),this.currentWeather.pres=(.750062*parseFloat(e.current.pressure_mb)).toFixed(2),this.currentWeather.windspeed=(parseFloat(e.current.wind_kph)/3.6).toFixed(2),this.currentWeather.winddir=e.current.wind_dir,this.currentWeather.error=""),this.render())}))}getupcomingWeather(){const e=`https://api.weatherapi.com/v1/forecast.json?key=f00cf593acf646ed8fa191758212710&q=${this.city}`;fetch(e).then((e=>e.json())).then((e=>{e&&(e.error&&1006===e.error.code?this.upcomingWeather.error=e.error.message:this.upcomingWeather.air=e.forecast.forecastday[0].hour[12].condition.text,this.render())}))}render(){const e=this.rooEl.getElementsByClassName("weather-forecast__container")[0];e.innerHTML="";const t=document.createElement("div");t.classList.add("weather-forecast__city"),t.innerText=this.city;const s=document.createElement("div");s.classList.add("weather-forecast__weather-block"),s.classList.add("weather-block");const i=document.createElement("div");i.classList.add("weather-block__title"),i.innerText=this.currentWeatherTitle;const r=document.createElement("div");if(r.classList.add("weather-block__body"),""===this.currentWeather.error){const e=document.createElement("p");e.innerText=this.currentWeather.air;const t=document.createElement("p");t.innerText=`Temperature: ${this.currentWeather.temp} °C`;const s=document.createElement("p");s.innerText=`Air humidity: ${this.currentWeather.hum} %`;const i=document.createElement("p");i.innerText=`Air pressure: ${this.currentWeather.pres} mm Hg`;const a=document.createElement("p");a.innerText=`Wind speed: ${this.currentWeather.windspeed} m/s`;const n=document.createElement("p");n.innerText=`Wind direction: ${this.currentWeather.winddir}`,r.appendChild(e),r.appendChild(t),r.appendChild(s),r.appendChild(i),r.appendChild(a),r.appendChild(n)}else{const e=document.createElement("p");e.innerText=this.currentWeather.error,r.appendChild(e)}const a=document.createElement("div");a.classList.add("weather-forecast__weather-block"),a.classList.add("weather-block");const n=document.createElement("div");n.classList.add("weather-block__title"),n.innerText=this.upcomingWeatherTitle;const o=document.createElement("div");if(o.classList.add("weather-block__body"),""===this.upcomingWeather.error){const e=document.createElement("p");e.innerText=this.upcomingWeather.air,o.appendChild(e)}else{const e=document.createElement("p");e.innerText=this.upcomingWeather.error,o.appendChild(e)}s.appendChild(i),s.appendChild(r),a.appendChild(n),a.appendChild(o),e.appendChild(t),e.appendChild(s),e.appendChild(a)}}},149:function(e,t,s){"use strict";s.r(t),t.default=s.p+"f6df2b8571daebe26e83fbe5be6b14ec.mp3"},41:function(e,t,s){"use strict";s.r(t),t.default=s.p+"a919ffdad2bbccc5f23efd6bd39021b9.mp3"},404:function(e,t,s){"use strict";s.r(t),t.default=s.p+"7dc6e8d830561dd14d04033d18ac528a.mp3"},191:function(e,t,s){"use strict";s.r(t),t.default=s.p+"a99984148651ae516ac2ccbbcd0fd2b6.mp3"},10:function(e,t,s){var i={"./01_plour_-_sura.mp3":149,"./02_plour_-_saratov_reservoir.mp3":41,"./03_plour_-_uglichskoye_reservoir.mp3":404,"./04_plour_-_vlaga.mp3":191};function r(e){var t=a(e);return s(t)}function a(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=10},536:function(e){"use strict";e.exports=JSON.parse('[{"authorName":"Lao Tzu","text":"The journey of a thousand miles begins with one step."},{"authorName":"Friedrich Nietzsche","text":"That which does not kill us makes us stronger."},{"authorName":"John Lennon","text":"Life is what happens when you’re busy making other plans."},{"authorName":"Joe Kennedy","text":"When the going gets tough, the tough get going."},{"authorName":"Mahatma Gandhi","text":"You must be the change you wish to see in the world."},{"authorName":"Mae West","text":"You only live once, but if you do it right, once is enough."},{"authorName":"Robert H. Schuller","text":"Tough times never last but tough people do."},{"authorName":"Stephen King","text":"Get busy living or get busy dying."},{"authorName":"Henry Ford","text":"Whether you think you can or you think you cant, youre right."},{"authorName":"Alrded Lord Tennyson","text":"Tis better to have loved and lost than to have never loved at all."},{"authorName":"Sir Francis Bacon","text":"A man is but what he knows."},{"authorName":"Wayne Gretzky","text":"You miss 100 percent of the shots you never take."}]')}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,s),a.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e}(),function(){"use strict";var e=s(676),t=s.n(e);const i=["Plour - Sura","Plour - Saratov reservoir","Plour - Uglichskoye reservoir","Plour - Vlaga"],r=(a=s(10),a.keys().reduce(((e,t)=>(e.push(a(t)),e)),[])).map(((e,t)=>({songName:i[t],src:e.default})));var a;new(t())("momentum-app").addPlaylist(r)}()}();