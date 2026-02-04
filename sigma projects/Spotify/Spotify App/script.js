console.log("chalo bhae javascript likha");
  let currentSong = new Audio();
  let songs;
  let currFolder;
  function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
//To get all the songs
async function getSongs(folder) {
    currFolder = folder;

    let a = await fetch(`http://127.0.0.1:5500/Spotify%20App/${folder}/`);
    let response = await a.text();

    // 1. Create a temporary element to parse the string into actual HTML
    let div = document.createElement("div");
    div.innerHTML = response;

    // 2. Get all anchor (a) tags from the response
    let as = div.getElementsByTagName("a");
    console.log(as);
 songs = [];

    // 3. Loop through all links and find the ones ending in .mp4 or .mp3
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp4") || element.href.endsWith(".mp3")) {
            // Push the full URL or just the song name into our array
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }
    console.log(songs);
     let songUl = document.querySelector(".songList").getElementsByTagName("ul")[0]
     songUl.innerHTML = "";
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li>
      <img class="invert" src="img/music.svg" alt="#">
                            <div class="info">
                                <div>${song.split("/").pop()}</div>
                                <div>Abdullah</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="">
                            </div>
    
    </li>`;
   }

   //Attach event listeners to each song
   Array.from(document.querySelector(".songList").getElementsByTagName('li')).forEach( e => {
    e.addEventListener("click", element => {
        
        console.log(e.querySelector(".info").firstElementChild.innerHTML);
        playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
           })
    })

}

const playMusic = (track, pause = false) =>{
    // let audio = new Audio("/Spotify%20App/songs/" + track);
    currentSong.src = `/Spotify%20App/${currFolder}/` + track;
    if(pause){
        // currentSong.play();
        // play.src = "img/play.svg";
    }
      document.querySelector(".songinfo").innerHTML = "Playing: " + track;
      document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

//  async function displayAlbums() {
//     console.log("displaying albums");
//           let a = await fetch(`http://127.0.0.1:5500/Spotify%20App/songs`);
//     let response = await a.text();

//     // 1. Create a temporary element to parse the string into actual HTML
//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let anchors = div.getElementsByTagName("a");
//     let cardContainer = document.querySelector(".cardContainer");

//     let array = Array.from(anchors);

//     // --- CHANGE IS HERE: Use a standard FOR loop instead of forEach ---
//     for (let index = 0; index < array.length; index++) {
//         const e = array[index]; 
        
//         if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
//             let folder = e.href.split("/").slice(-2)[0];
            
//             // Ab aap yahan AWAIT use kar sakte hain kyunki ye main function ke andar hai
//             let a = await fetch(`http://127.0.0.1:5500/Spotify%20App/songs/${folder}/info.json`);
//             let response = await a.json(); 
//             console.log(response);  
//             cardContainer.innerHTML += ` <div data-folder="ncs" class="card">
//                         <div class="play">
//                             <svg viewBox="0 0 24 24" aria-hidden="true">
//                                 <path d="M5 3l14 9-14 9V3z" />
//                             </svg>
//                         </div>
//                         <img src="/songs/folder/cover.jpg" alt="Cover">
//                         <h2>
//                         ${response.title}
//                         </h2>
//                         <p>${response.description}</p>
//                     </div>`
//         }
//         }
//           //load the playlist when card is clicked
//     Array.from(document.getElementsByClassName("card")).forEach( e => {
//        e.addEventListener("click" ,async item =>{
//          songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
         
//        })
//      })
//     }
//Show all songs in the playlist













async function displayAlbums() {
    console.log("displaying albums");
    let a = await fetch(`http://127.0.0.1:5500/Spotify%20App/songs/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let cardContainer = document.querySelector(".cardcontainer");
   

    let array = Array.from(anchors);
    console.log(array);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        // FIX 1: Ensure we are only looking at folders inside /songs/
        if (e.href.includes("/songs/") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0];

            // FIX 2: Skip the 'songs' folder itself or 'Spotify App' folder
            if (folder !== "songs" && folder !== "Spotify%20App") {
                try {
                    let infoFetch = await fetch(`http://127.0.0.1:5500/Spotify%20App/songs/${folder}/info.json`);
                    
                    // If info.json doesn't exist, skip this folder
                    if (!infoFetch.ok) continue;

                    let infoResponse = await infoFetch.json();

                    // FIX 3: Use dynamic variables ${folder} in your HTML template
                    cardContainer.innerHTML += `
                        <div data-folder="${folder}" class="card">
                            <div class="play">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M5 3l14 9-14 9V3z" fill="black" />
                                </svg>
                            </div>
                            <img src="http://127.0.0.1:5500/Spotify%20App/songs/${folder}/cover.jpg" alt="Cover">
                            <h2>${infoResponse.title}</h2>
                            <p>${infoResponse.description}</p>
                        </div>`;
                } catch (error) {
                    console.error("Error loading info.json for folder:", folder);
                }
            }
        }
    }

    // Attach click listeners AFTER cards are added
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            console.log("Fetching songs for folder:", item.currentTarget.dataset.folder);
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
            // Play the first song of the new album immediately
            playMusic(songs[0]);
        })
    });
}






async function main() {
  
     await getSongs("songs/ncs");
    playMusic(songs[0].split("/").pop(), true);
    console.log(songs);

    //display all the albums

   await displayAlbums();
   
    //Attach an event listener to play,pause,next,previous buttons
    document.getElementById("play").addEventListener("click", () => {
        if(currentSong.paused){
            currentSong.play();
            play.src = "img/pause.svg";
        } else {
            currentSong.pause();
            play.src = "img/play.svg";
        }});

        //Listen for timeupdate event
         currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })
    //Add event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        console.log(e);
        let percent = e.offsetX / e.currentTarget.offsetWidth;
        currentSong.currentTime = percent * currentSong.duration;
    });

    //Event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {

        document.querySelector(".left").style.left = "0";
    })

    //Event listener for close button
    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"});

        // Add an event listener to previous
    // previous.addEventListener("click", () => {
    //     currentSong.pause()
    //     console.log("Previous clicked")
    //     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    //     if ((index - 1) >= 0) {
    //         playMusic(songs[index - 1])
    //     }
    // })

//     // Add an event listener to next
    // next.addEventListener("click", () => {
    //     currentSong.pause()
    //     console.log("Next clicked")

    //     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    //     if ((index + 1) < songs.length) {
    //         playMusic(songs[index + 1])
    //     }
    // })
    // Add an event listener to previous
previous.addEventListener("click", () => {
    currentSong.pause()
    console.log("Previous clicked")
    
    // 1. Find the index using the FULL URL (because 'songs' array has full URLs)
    let index = songs.indexOf(currentSong.src)

    // 2. Determine previous song logic
    if ((index - 1) >= 0) {
        // 3. Extract just the filename from the URL before passing it
        // We split by "/" and take the last part (the filename)
        let previousSong = songs[index - 1].split("/").slice(-1)[0]
        playMusic(previousSong)
    }
})

// Add an event listener to next
next.addEventListener("click", () => {
    currentSong.pause()
    console.log("Next clicked")

    // 1. Find the index using the FULL URL
    let index = songs.indexOf(currentSong.src)

    // 2. Determine next song logic
    if ((index + 1) < songs.length) {
        // 3. Extract just the filename from the URL before passing it
        let nextSong = songs[index + 1].split("/").slice(-1)[0]
        playMusic(nextSong)
    }
})

   // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("setting volume to", e.target.value, "/ 100");
        currentSong.volume = parseInt(e.target.value) / 100
    });
       //load the playlist when card is clicked
    Array.from(document.getElementsByClassName("card")).forEach( e => {
       e.addEventListener("click" ,async item =>{
         songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
         
       })
     })
  

     //add an event listener to volume slider
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })
}
main();
