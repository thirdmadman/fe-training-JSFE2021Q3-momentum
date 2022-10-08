!function(){var e={416:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageArray=[],this.updateArray()}var a,n,s;return a=e,(n=[{key:"getNextImage",value:function(){}},{key:"getPreviousImage",value:function(){}},{key:"updateArray",value:function(){}},{key:"mixArray",value:function(){}}])&&t(a.prototype,n),s&&t(a,s),e}();e.exports=a},316:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentClassName=t,this.className="configs",this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName("button-configs")[0].addEventListener("click",(function(){return a.show()}),!1),this.rooEl.getElementsByClassName("configs__button-close")[0].addEventListener("click",(function(){return a.hide()}),!1),this.hide(),this.configData=null,this.defaultConfigData={greetings:{name:"John Dove"},weatherForecast:{city:"New York"}}}var a,n,s;return a=e,(n=[{key:"hide",value:function(){this.rooEl.classList.add("configs_hidden")}},{key:"show",value:function(){this.rooEl.classList.remove("configs_hidden"),this.showIputsData()}},{key:"showIputsData",value:function(){this.rooEl.getElementsByClassName("group-configs__input-text_name")[0].value=this.configData.greetings.name,this.rooEl.getElementsByClassName("group-configs__input-text_city")[0].value=this.configData.weatherForecast.city}},{key:"getIputsData",value:function(){try{this.configData.greetings.name=this.rooEl.getElementsByClassName("group-configs__input-text_name")[0].value,this.configData.weatherForecast.city=this.rooEl.getElementsByClassName("group-configs__input-text_city")[0].value}catch(e){localStorage.removeItem("momentumData"),console.log("Due exeption localStorage have been cleared"),this.loadData()}}},{key:"loadData",value:function(){return localStorage.getItem("momentumData")?this.configData=Object.keys(JSON.parse(localStorage.getItem("momentumData"))).length>0?JSON.parse(localStorage.getItem("momentumData")):this.defaultConfigData:this.configData=this.defaultConfigData,console.log(this.configData),this.configData}},{key:"save",value:function(){this.getIputsData(),localStorage.setItem("momentumData",JSON.stringify(this.configData)),console.log(localStorage.getItem("momentumData"))}}])&&t(a.prototype,n),s&&t(a,s),e}();e.exports=a},875:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentClassName=t,this.className="day-quote",this.defaultTitle="Quote of the day by ",this.defaultTitleWithRemimnder="Quote of the day (click for update) ",this.quotesArray=[{authorName:"No one",text:"You will never know what on the bottom of abyss, until you actually fall on this bottom"}],this.currentQuoteId=0,this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.rooEl.getElementsByClassName("day-quote__text")[0].addEventListener("click",(function(){return a.nextQuote()})),this.render(!0)}var a,n,s;return a=e,(n=[{key:"setQuotesArray",value:function(e){this.quotesArray=e,this.render(!0)}},{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"render",value:function(e){var t="";this.currentQuoteId=this.getRandomInt(0,this.quotesArray.length),t=e?this.defaultTitleWithRemimnder:this.defaultTitle+this.quotesArray[this.currentQuoteId].authorName,this.rooEl.getElementsByClassName("day-quote__title")[0].innerText=t,this.rooEl.getElementsByClassName("day-quote__text")[0].innerText=this.quotesArray[this.currentQuoteId].text}},{key:"nextQuote",value:function(){this.quotesArray.length>1&&this.quotesArray.length-1>this.currentQuoteId?this.currentQuoteId++:this.currentQuoteId=0,console.log(this.currentQuoteId),console.log(this.quotesArray),this.render()}}])&&t(a.prototype,n),s&&t(a,s),e}();e.exports=a},508:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentClassName=t,this.className="greetings",this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.show(),setTimeout((function(){return a.hide()}),3e3),this.rooEl.addEventListener("click",(function(){return a.hide()}),!1),this.userName="John Dove",this.greetingsText="Hello there,",this.render()}var a,n,s;return a=e,(n=[{key:"setUserName",value:function(e){this.userName=e,this.render()}},{key:"timeTracker",value:function(){var e=(new Date).getHours();e>=6&&e<12?this.greetingsText="Good morning,":e>=12&&e<18?this.greetingsText="Good afternoon,":e>=18&&e<24?this.greetingsText="Good evening,":e>=0&&e<6&&(this.greetingsText="Good night,")}},{key:"setGreetingsText",value:function(e){this.greetingsText=e,this.render()}},{key:"render",value:function(){this.timeTracker();var e=this.rooEl.getElementsByClassName("greetings__text")[0],t=this.rooEl.getElementsByClassName("greetings__name")[0];e.innerText=this.greetingsText,t.innerText=this.userName}},{key:"hide",value:function(){this.rooEl.classList.add("greetings_hidden")}},{key:"show",value:function(){this.rooEl.classList.remove("greetings_hidden")}}])&&t(a.prototype,n),s&&t(a,s),e}();e.exports=a},202:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentClassName=t,this.className="date-time",this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.timeEl=this.rooEl.getElementsByClassName("date-time__time")[0],this.dateEl=this.rooEl.getElementsByClassName("date-time__date")[0],this.isActive=!0,this.is12hourTimeFormat=!1,this.locales="en-US",this.updateTime()}var a,n,s;return a=e,(n=[{key:"updateTime",value:function(){var e=this,t=new Date,a={hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:this.is12hourTimeFormat};this.dateEl.innerHTML=t.toLocaleString(this.locales,{weekday:"long",month:"long",day:"numeric"}),this.timeEl.innerHTML=t.toLocaleString(this.locales,a),this.isActive&&setTimeout((function(){return e.updateTime()}),1e3)}}])&&t(a.prototype,n),s&&t(a,s),e}();e.exports=a},676:function(e,t,a){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=a(202),r=a(416),i=a(289),o=a(875),l=a(714),c=a(508),u=a(316),h=a(536),d=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.className=t,this.greetings=new c(this.className),this.clock=new s(this.className),this.backgroundProvider=new r,this.musicPlayer=new i(this.className),this.dayQuote=new o(this.className),h&&this.dayQuote.setQuotesArray(h),this.weatherForecast=new l(this.className),this.configs=new u(this.className),this.configData=this.configs.loadData(),this.setConfigs(),document.getElementsByClassName(this.className)[0].getElementsByClassName("configs__button-save")[0].addEventListener("click",(function(){a.configs.save(),a.configData=a.configs.loadData(),a.setConfigs()}),!1)}var t,a,d;return t=e,(a=[{key:"addPlaylist",value:function(e){this.musicPlayer.setPlayList(e)}},{key:"setConfigs",value:function(){this.configData&&(this.greetings.setUserName(this.configData.greetings.name),this.weatherForecast.setCity(this.configData.weatherForecast.city)),console.log("set")}}])&&n(t.prototype,a),d&&n(t,d),e}();e.exports=d},289:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentClassName=t,this.className="music-player",this.playlist=[],this.currentTrack=0,this.isPlaying=!1,this.currentVolume=1,this.currentPlayingTime=0,this.audio=null,this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.rooEl.getElementsByClassName("player-controls__button_play")[0].addEventListener("click",(function(){return a.switchPlay()})),this.rooEl.getElementsByClassName("player-controls__button_prev")[0].addEventListener("click",(function(){return a.prev()})),this.rooEl.getElementsByClassName("player-controls__button_next")[0].addEventListener("click",(function(){return a.next()})),this.rooEl.getElementsByClassName("music-player__button-close")[0].addEventListener("click",(function(){a.hidePlayer()})),this.rooEl.getElementsByClassName("music-player__button-open")[0].addEventListener("click",(function(){a.showPlayer()})),this.rooEl.getElementsByClassName("player-controls__scroll")[0].addEventListener("input",(function(e){a.scrollTrackTo(e.target.value)}),!1),this.renderPlaylist()}var a,n,s;return a=e,(n=[{key:"hidePlayer",value:function(){this.rooEl.getElementsByClassName("music-player__button-close")[0].classList.add("music-player__button-close_hidden"),this.rooEl.getElementsByClassName("music-player__overlay")[0].classList.add("music-player__overlay_hidden"),this.rooEl.getElementsByClassName("music-player__button-open")[0].classList.remove("music-player__button-open_hidden")}},{key:"showPlayer",value:function(){this.rooEl.getElementsByClassName("music-player__button-open")[0].classList.add("music-player__button-open_hidden"),this.rooEl.getElementsByClassName("music-player__button-close")[0].classList.remove("music-player__button-close_hidden"),this.rooEl.getElementsByClassName("music-player__overlay")[0].classList.remove("music-player__overlay_hidden")}},{key:"addToPlaylist",value:function(e,t){this.playlist.push({songName:e,src:t})}},{key:"setPlayList",value:function(e){this.playlist=e,this.render(),this.renderPlaylist()}},{key:"cutString",value:function(e,t){return e.length>t?e.substring(0,t-3)+"...":e}},{key:"scrollTrackTo",value:function(e){this.audio&&(this.audio.currentTime=this.audio.duration/100*e,this.renderTrackPos(!0))}},{key:"renderTrackPos",value:function(e){var t=this;if(this.audio){var a=this.audio.currentTime/(this.audio.duration/100);this.rooEl.getElementsByClassName("player-controls__scroll")[0].style.background="linear-gradient(90deg, #eeeeee ".concat(a,"%, #777777 ").concat(a,"%)"),this.isPlaying&&!e&&setTimeout((function(){return t.renderTrackPos()}),1e3)}else this.rooEl.getElementsByClassName("player-controls__scroll")[0].style.background="linear-gradient(90deg, #eeeeee 0%, #777777 0%)"}},{key:"render",value:function(){var e;e=this.cutString(this.playlist[this.currentTrack].songName,22),this.rooEl.getElementsByClassName("player-controls__song-name")[0].innerText=e,this.isPlaying?this.rooEl.getElementsByClassName("player-controls__button_play")[0].classList.add("player-controls__button_playing"):this.rooEl.getElementsByClassName("player-controls__button_play")[0].classList.remove("player-controls__button_playing"),this.renderTrackPos(),this.renderPlaylist()}},{key:"renderPlaylist",value:function(){var e=this;this.rooEl.getElementsByClassName("player-playlist__songs-list")[0].innerHTML="",this.playlist.length<=4&&this.playlist.forEach((function(t,a){var n=document.createElement("p");n.innerText=e.cutString(t.songName,25),n.classList.add("player-playlist__songs-list-element"),n.addEventListener("click",(function(){e.stop(),e.currentTrack=a,e.switchPlay()})),e.currentTrack===a&&n.classList.add("player-playlist__songs-list-element_playing"),e.rooEl.getElementsByClassName("player-playlist__songs-list")[0].appendChild(n)}))}},{key:"switchPlay",value:function(){var e=this;this.isPlaying?(this.audio&&this.audio.pause(),this.isPlaying=!this.isPlaying):(this.audio||(this.audio=new Audio(this.playlist[this.currentTrack].src),this.audio.currentTime=0,this.audio.addEventListener("ended",(function(){e.next(),console.log("Song is ended")}))),this.audio.play(),this.isPlaying=!this.isPlaying),this.render()}},{key:"stop",value:function(){this.audio&&(this.audio.pause(),this.audio.currentTime=0),this.audio=null,this.isPlaying=!1}},{key:"pause",value:function(){this.audio&&(this.audio.pause(),this.isPlaying=!1)}},{key:"prev",value:function(){this.stop(),this.currentTrack>0?this.currentTrack--:this.currentTrack=this.playlist.length-1,this.switchPlay()}},{key:"next",value:function(){this.stop(),this.currentTrack<this.playlist.length-1?this.currentTrack++:this.currentTrack=0,this.switchPlay()}},{key:"prevPage",value:function(){}},{key:"nextPage",value:function(){}}])&&t(a.prototype,n),s&&t(a,s),e}();e.exports=a},714:function(e){function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentClassName=t,this.className="weather-forecast",this.city="Tolen",this.currentWeather={error:"",air:"Clouds of disasters",temp:1,hum:35,pres:748.9,windspeed:10,winddir:"West"},this.upcomingWeather={error:"",air:"Heavy rain of gore"},this.currentWeatherTitle="Current weather:",this.upcomingWeatherTitle="Upcoming weather:",this.rooEl=document.getElementsByClassName(this.parentClassName)[0].getElementsByClassName(this.className)[0],this.rooEl.getElementsByClassName("weather-forecast__button-close")[0].addEventListener("click",(function(){return a.hide()})),this.rooEl.getElementsByClassName("weather-forecast__button-open")[0].addEventListener("click",(function(){return a.show()})),this.getCurrentWeather(),this.getupcomingWeather(),this.render()}var a,n,s;return a=e,(n=[{key:"checkCity",value:function(){}},{key:"setCity",value:function(e){this.city=e,this.getCurrentWeather(),this.getupcomingWeather(),this.render()}},{key:"show",value:function(){this.rooEl.getElementsByClassName("weather-forecast__button-open")[0].classList.add("weather-forecast__button-open_hidden"),this.rooEl.getElementsByClassName("weather-forecast__overlay")[0].classList.remove("weather-forecast__overlay_hidden"),this.rooEl.getElementsByClassName("weather-forecast__button-close")[0].classList.remove("weather-forecast__button-close_hidden")}},{key:"hide",value:function(){this.rooEl.getElementsByClassName("weather-forecast__button-close")[0].classList.add("weather-forecast__button-close_hidden"),this.rooEl.getElementsByClassName("weather-forecast__overlay")[0].classList.add("weather-forecast__overlay_hidden"),this.rooEl.getElementsByClassName("weather-forecast__button-open")[0].classList.remove("weather-forecast__button-open_hidden")}},{key:"getCurrentWeather",value:function(){var e=this,t="https://api.weatherapi.com/v1/current.json?key=f00cf593acf646ed8fa191758212710&q="+this.city;fetch(t).then((function(e){return e.json()})).then((function(t){t&&(t.error&&1006===t.error.code?e.currentWeather.error=t.error.message:(e.currentWeather.air=t.current.condition.text,e.currentWeather.temp=parseFloat(t.current.temp_c).toFixed(1),e.currentWeather.hum=parseFloat(t.current.humidity).toFixed(0),e.currentWeather.pres=(.750062*parseFloat(t.current.pressure_mb)).toFixed(2),e.currentWeather.windspeed=(parseFloat(t.current.wind_kph)/3.6).toFixed(2),e.currentWeather.winddir=t.current.wind_dir,e.currentWeather.error=""),e.render())}))}},{key:"getupcomingWeather",value:function(){var e=this,t="https://api.weatherapi.com/v1/forecast.json?key=f00cf593acf646ed8fa191758212710&q="+this.city;fetch(t).then((function(e){return e.json()})).then((function(t){t&&(t.error&&1006===t.error.code?e.upcomingWeather.error=t.error.message:e.upcomingWeather.air=t.forecast.forecastday[0].hour[12].condition.text,e.render())}))}},{key:"render",value:function(){var e=this.rooEl.getElementsByClassName("weather-forecast__container")[0];e.innerHTML="";var t=document.createElement("div");t.classList.add("weather-forecast__city"),t.innerText=this.city;var a=document.createElement("div");a.classList.add("weather-forecast__weather-block"),a.classList.add("weather-block");var n=document.createElement("div");n.classList.add("weather-block__title"),n.innerText=this.currentWeatherTitle;var s=document.createElement("div");if(s.classList.add("weather-block__body"),""===this.currentWeather.error){var r=document.createElement("p");r.innerText=this.currentWeather.air;var i=document.createElement("p");i.innerText="Temperature: "+this.currentWeather.temp+" °C";var o=document.createElement("p");o.innerText="Air humidity: "+this.currentWeather.hum+" %";var l=document.createElement("p");l.innerText="Air pressure: "+this.currentWeather.pres+" mm Hg";var c=document.createElement("p");c.innerText="Wind speed: "+this.currentWeather.windspeed+" m/s";var u=document.createElement("p");u.innerText="Wind direction: "+this.currentWeather.winddir,s.appendChild(r),s.appendChild(i),s.appendChild(o),s.appendChild(l),s.appendChild(c),s.appendChild(u)}else{var h=document.createElement("p");h.innerText=this.currentWeather.error,s.appendChild(h)}var d=document.createElement("div");d.classList.add("weather-forecast__weather-block"),d.classList.add("weather-block");var m=document.createElement("div");m.classList.add("weather-block__title"),m.innerText=this.upcomingWeatherTitle;var y=document.createElement("div");if(y.classList.add("weather-block__body"),""===this.upcomingWeather.error){var f=document.createElement("p");f.innerText=this.upcomingWeather.air,y.appendChild(f)}else{var g=document.createElement("p");g.innerText=this.upcomingWeather.error,y.appendChild(g)}a.appendChild(n),a.appendChild(s),d.appendChild(m),d.appendChild(y),e.appendChild(t),e.appendChild(a),e.appendChild(d)}}])&&t(a.prototype,n),s&&t(a,s),e}();e.exports=a},149:function(e,t,a){"use strict";a.r(t),t.default=a.p+"f6df2b8571daebe26e83fbe5be6b14ec.mp3"},41:function(e,t,a){"use strict";a.r(t),t.default=a.p+"a919ffdad2bbccc5f23efd6bd39021b9.mp3"},404:function(e,t,a){"use strict";a.r(t),t.default=a.p+"7dc6e8d830561dd14d04033d18ac528a.mp3"},191:function(e,t,a){"use strict";a.r(t),t.default=a.p+"a99984148651ae516ac2ccbbcd0fd2b6.mp3"},10:function(e,t,a){var n={"./01_plour_-_sura.mp3":149,"./02_plour_-_saratov_reservoir.mp3":41,"./03_plour_-_uglichskoye_reservoir.mp3":404,"./04_plour_-_vlaga.mp3":191};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=10},536:function(e){"use strict";e.exports=JSON.parse('[{"authorName":"No one","text":"You will never know what on the bottom of abyss, until you actually fall on this bottom"},{"authorName":"Max Payne","text":"In the land of the blind, the one-eyed man is king."},{"authorName":"J-P. Sartre, Nausea","text":"But even my death would have been In the way."},{"authorName":"Muddasheep","text":"You might get weapons to fight your way through, but you will never be able to escape."}]')}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){"use strict";var e,t=a(676),n=a.n(t),s=["Plour - Sura","Plour - Saratov reservoir","Plour - Uglichskoye reservoir","Plour - Vlaga"],r=(e=a(10),e.keys().reduce((function(t,a){return t.push(e(a)),t}),[])).map((function(e,t){return{songName:s[t],src:e.default}}));new(n())("momentum-app").addPlaylist(r),console.log("Hello there!\nI ask you, to give me little more time on this task: crosscheck deadline -6 hours.\nIt took me some time to make kind of design in figma https://www.figma.com/file/XbzieAkmajuzg1zUpYOSIY/Momentum\nSo I have had less time on this, hope I will end this task"),console.log("Still in progress..."),console.log("Added after deadline:\nJS clock function\nMusic player, hide it button\nDayQuote class, no API\nGreetings on startap\nSave config")}()}();