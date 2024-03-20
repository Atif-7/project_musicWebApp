//song list
let songs = [
   {
     name: "Bella ciao",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "NoCopyrightSounds [NCS]"
   },
   {
     name: "Majnun nabudam - music",
     path: "music/3.mp3",
     img: "images/2.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Gym class heroes - stereo",
     path: "music/2.mp3",
     img: "images/3.jpg",
     singer: "Audio Library"
   },
   {
     name: "Random - ringtone",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Atif"
   },
   {
     name: "Majnun Nabudam - Instrumental",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "Sun mere hamsafar",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Bollywood"
   }
];

/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < songs.length; i++) {

  let Html = ` 
    <div class="song">
      <div class="img">
        <img src="${songs[i].img}"/>
      </div>
      <div class="more">
        <audio src="${songs[i].path}" id="music"></audio>
        <div class="song_info">
          <p id="title">${songs[i].name}</p>
          <p>${songs[i].singer}</p>
        </div>
        <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};