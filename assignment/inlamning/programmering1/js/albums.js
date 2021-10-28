class Albums {
    constructor(image, name, price, id) {
    this.image = image
        this.name = name
        this.price = price
        this.id = id
    }
}

let allAlbums = [
    new Albums(
        "img/2021-10-23-152138.png",
        "Revival 2017",
        99,
        'Revival'
    ),
    new Albums(
        "img/2021-10-23-152109.png",
        "Relapse 2009",
        99,
        'Relapse'
    ),
    new Albums(
        "img/2021-10-23-152045.png",
        "Music To Be Murdered By 2020",
        99,
        'Music To Be Murdered By'
    ),
    new Albums(
        "img/2021-10-23-152019.png",
        "kamikaze 2018",
        99,
        'kamikaze'
    ),
new Albums(
    "img/2021-10-23-151952.png",
    "Encore 2004",
    99,
    'Encore'
),

new Albums(
    "img/2021-10-23-151924.png",
    "Curtain Call 2005",
    99,
    'Curtain Call'
),

new Albums(
    "img/2021-10-23-151843.png",
    "The Eminem Show 2002",
    99,
    'The Eminem Show'
),
new Albums(
    "img/2021-10-23-151722.png",
    "Recovery 2010",
    99,
    'Recovery'
),
    new Albums(
        "img/2021-10-23-151625.png",
        "The Marshall Mathers LP 2000",
        99,
        'The Marshall Mathers LP'
    ),

    new Albums(
        "img/2021-10-23-164100.png",
        "The Marshall Mathers LP 2",
        99,
        'The Marshall Mathers LP 2'
    ),

]


function renderSingleAlbum(album) {
    return `
    <article id=albumToBy>
        <img src=${album.image} alt=${album} class="img" id=${album}>
            <p>${album.name}</p>
            <p>${album.price}:-</p>
            <button onclick="buy('${album.image}','${album.name}','${album.price}','${album.id}')">Köp</button>
    </article> `
}

let renderAllAlbums = [];

for (const album of allAlbums){
    renderAllAlbums.push(renderSingleAlbum(album))
}
document.getElementById('albums').innerHTML = renderAllAlbums