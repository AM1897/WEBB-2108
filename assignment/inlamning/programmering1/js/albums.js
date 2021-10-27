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


function renderSingleAlbum(album) {
    return `
    <article id=albumToBy>
        <img src=${album.image} alt=${album} class="img" id=${album}>
            <p>${album.name}</p>
            <p>Pris: ${album.price}:-</p>
            <button id="${album.name}">Köpa</button>
    </article> `
}

let renderAllAlbums = [];

function updateElementIdHtml(elementId, html) {
    document.getElementById(elementId).innerHTML = html
}

function updateContent() {
    let htmlElement = ''

    for (const album of albums) {
        console.log(album)
        htmlElement += renderSingleAlbum(album)
    }

    updateElementIdHtml('albums', htmlElement)
}

updateContent()

function itemAlreadyInCart(name) {
    return (albums[0] === name)
}

function updateQuantity() {
    renderAllAlbums[0].quantity += 1
}


function insertItemToCart(album) {
    renderAllAlbums.push({
        Title: album.name,
        Type: album.type,
        Price: album.price,
        quantity: 1,
    });
}

function something(album) {
    if (renderAllAlbums.length === 0) {
        insertItemToCart(album);
    } else {
        if (itemAlreadyInCart(album)) {
            updateQuantity(album);
        } else {
            insertItemToCart(album);
        }
    }
    console.log(renderAllAlbums)
}

window.addEventListener('load', function () {
    document.getElementById(albums[0].name)
        .addEventListener('click', function () {
            something(albums[0])
        });

    document.getElementById(albums[1].name)
        .addEventListener('click', function () {
            something(albums[1])
        });

    document.getElementById(albums[2].name)
        .addEventListener('click', function () {
            something(albums[2])
        });

    document.getElementById(albums[3].name)
        .addEventListener('click', function () {
            something(albums[3])
        });

    document.getElementById(albums[4].name)
        .addEventListener('click', function () {
            something(albums[4])
        });

    document.getElementById(albums[5].name)
        .addEventListener('click', function () {
            something(albums[5])
        });

    document.getElementById(albums[6].name)
        .addEventListener('click', function () {
            something(albums[6])
        });

    document.getElementById(albums[7].name)
        .addEventListener('click', function () {
            something(albums[7])
        });
})