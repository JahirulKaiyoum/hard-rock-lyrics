document.getElementById("search-btn").addEventListener("click", function () {
    const songName = document.getElementById("songName").value;
// console.log(song);
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
        .then(response => response.json())
        .then(data => {  
           
            for (let i = 0; i <10; i++) {
                const element = data.data[i];
                const artistName = element.artist.name;
                const titleOfSong = element.title;
                
                
        document.getElementById('list').innerHTML+=`<div class="mx-auto" style="width: 500px;"> <p  style="border: 1px solid white;text-align:center;"  class="author lead"><strong>${titleOfSong}</strong> Album by <span>${artistName}</span> <button class="btn btn-success " id="lastBtn" onclick="getLyrics('${artistName}','${titleOfSong}')" >Get Lyrics</button></p> </div>`
      
        }
            
        })

});


function getLyrics(artistName, titleOfSong) {
    
    console.log(artistName ,titleOfSong);
    fetch(`https://api.lyrics.ovh/v1/${artistName}/${titleOfSong}`)
        .then(response => response.json())
        .then(song => {
           
            document.getElementById("songLyrics").innerHTML+=`<h2 class="text-success mb-4">Lyrics</h2>
            <pre class="lyric text-white">${song.lyrics}</pre>`

        })
} 

 

  
