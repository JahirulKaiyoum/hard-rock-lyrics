document.getElementById("search-btn").addEventListener("click", function () {
    const songName = document.getElementById("songName").value;

    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
        .then(response => response.json())
        .then(data => {  

          
            for (let i = 0; i <10; i++) {
                const element = data.data[i];
                const artistName = element.artist.name;
                const titleOfSong = element.title;
                const albumTitle = element.album.title;
                const duration = element.duration;
                  
                document.getElementById('list').innerHTML +=`<div class="search-result col-md-12 mx-auto py-2">
                                                                <div class="single-result d-flex justify-content-between row align-items-center p-3">
                                                                    <div class="col-md-9">
                                                                        <h4 class="lyrics-name">${titleOfSong} &#127926&#127926</h4>
                                                                        <p class="author lead"> <strong>Artist Name</strong> : <span>${artistName}</span></p>
                                                                        <p> <strong>Album Titile</strong> : ${albumTitle}</p>
                                                                        <p><strong>Duration</strong>: ${duration} Second &#127911 </p>
                                                                    </div>
                                                                    <div class="col-md-3 text-md-right text-center">
                                                                        <button class="btn btn-success" onclick="getLyrics('${artistName}','${titleOfSong}')">Get Lyrics</button>
                                                                    </div>
                                                                </div>
                                                            </div>`
                
                                                            
            }    
        })

});

        function getLyrics(artistName,titleOfSong) {
            
            fetch(`https://api.lyrics.ovh/v1/${artistName}/${titleOfSong}`)
                .then(response => response.json())
                .then(song => {
                    if (song.error) {
                        alert("Lyric Not Found")
                    }
                    else {
                        
                    document.getElementById("songLyrics").innerHTML=`<h2 class="text-success mb-4">${titleOfSong} &#127925&#127925&#127925</h2>
                    <pre class="lyric text-white">${song.lyrics}</pre>`
                    }
                

                })
                
        } 
