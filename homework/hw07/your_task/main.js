const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

function playTrack(trackId) {
    const template = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>`;
    document.querySelector('#artist-section').innerHTML = `<h1>Now Playing</h1>` + template;
    

}

async function getTracks(term) {
    const url = `${baseURL}?q=${term}&type=track&limit=5`;
    console.log(url);
    const request = await fetch(url);
    const trackInfo = await request.json();

    document.querySelector("#tracks").innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const track = trackInfo[i];
        console.log(trackInfo);
        const snippet =
            `
        <section class="track-item preview" onclick="playTrack('${track.id}')">
            <img src="${track.album.image_url}">
            <i class="fas play-track fa-plasy" aria-hidden="true"></i>
            <div class="label">
                <h2>${track.name}</h2>
                <p>
                ${track.artist.name}
                </p>
            </div>
        </section>`;
        const container = document.querySelector(`#tracks`);
        container.innerHTML += snippet;
    }
}

async function getAlbums(term) {
    const url = `${baseURL}?q=${term}&type=album`;
    console.log(url);
    const request = await fetch(url);
    const albumInfo = await request.json();
    for (let i = 0; i < albumInfo.length; i++) {
        const album = albumInfo[i];
        console.log(albumInfo);
        const snippet =
            `
            <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
            <div>
                <img src="${album.image_url}">
                <h2>${album.name}</h2>
                <div class="footer">
                    <a href="${album.spotify_url}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>`;
        const container = document.querySelector(`#albums`);
        container.innerHTML += snippet;
    }
}

async function getArtist(term) {
    const url = `${baseURL}?q=${term}&type=artist&limit=1`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    // q=term&type=artist&limit=1
    // insert into DOM

    const snippet =
        `
                        <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
                            <div>
                                <img src=${data[0].image_url}>
                                <h2>${data[0].name}</h2>
                                <div class="footer">
                                    <a href="${data[0].spotify_url}" target="_blank">
                                        view on spotify
                                    </a>
                                </div>
                            </div>
                        </section>` ;

    const container = document.querySelector(`#artist`);
    container.innerHTML = snippet;
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}