document.getElementById("search-btn").addEventListener("click", function () {
    const songName = document.getElementById("songName").value;
// console.log(song);
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
        .then(response => response.json())
        .then(data => {  
            //console.log(songTitle);
            for (let i = 0; i <10; i++) {
                const element = data.data[i];
                console.log(element);
                item(element);    
        }
            
        })
    function item(element) {

        document.getElementById('list').innerHTML+=`<p class="author lead"><strong>${element.title}</strong> Album by <span>${element.artist.name}</span> <button class="btn btn-success"  >Get Lyrics</button></p> `
            
    }
});

 