let albums = [
    {
        image: "img/2021-10-23-152138.png",
        name: "Revival 2017",
        type: "CD",
        price: 99
    },
    {
        image: "img/2021-10-23-152109.png",
        name: "Relapse 2009",
        type: "CD",
        price: 99
    },
    {
        image: "img/2021-10-23-152045.png",
        name: "Music To Be Murdered By 2020",
        type: "CD",
        price: 99
    },
    {
        image: "img/2021-10-23-152019.png",
        name: "kamikaze 2018",
        type: "CD",
        price: 99
    },
    {
        image: "img/2021-10-23-151952.png",
        name: "Encore 2004",
        type: "CD",
        price: 99
    },
    {
        image: "img/2021-10-23-151924.png",
        name: "Curtain Call 2005",
        type: "CD",
        price: 99
    },
    {
        image: "img/2021-10-23-151843.png",
        name: "The Eminem Show 2002",
        type: "CD",
        price: 99
    },
    {
        image: "img/2021-10-23-151722.png",
        name: "Recovery 2010",
        type: "CD",
        price: 99
    },
    {
        image: "img/2021-10-23-151625.png",
        name: "The Marshall Mathers LP 2000",
        type: "CD",
        price: 99
    },

    {
        image: "img/2021-10-23-164100.png",
        name: "The Marshall Mathers LP 2",
        type: "CD",
        price: 99
    }
]


function renderSingleAlbum(albums) {
    return `
    <article id=albumToBy>
        <img src=${albums.image} alt=${albums} class="img" id=${albums}>
            <p>${albums.name}</p>
            <p>Pris: ${albums.price}:-</p>
            <button onClick="addAlbum('${albums}','${albums.name}','${albums.image}', ${albums.price})">Köpa</button>
    </article> `
        ;
}

let renderAllAlbums = [];

for (let i = 0; i < albums.length; i++) {
    renderAllAlbums.push(renderSingleAlbum(albums[i]))
}

document.getElementById("albums").innerHTML = renderAllAlbums;
