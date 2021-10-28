class AlbumsCart {
    constructor(image, name, price, id) {
    this.image = image
        this.name = name
        this.price = price
        this.id = id
        this.quantity = 1
        this.totalSum = price
    }
}


let buyAlbumsToCarts = []

function buy(image, name, price, id) {
    let alreadyInCart = false;
    for (const album of buyAlbumsToCarts) {
        if (album.id == id) {
            album.quantity += 1
            album.totalSum = album.price * album.quantity;
            alreadyInCart = true
        }
    }
    if (alreadyInCart == false) {
        let addNewAlbumInCart = new AlbumsCart(image, name, price, id)
        buyAlbumsToCarts.push(addNewAlbumInCart)
    }
}

function showAlbumInCart(album) {
    return `
    <article id="album-in-cart">
        <img src=${album.image} alt=${album.name} class="img-in-cart" id=${album.id}>
            <p>${album.name}</p>
            <p>Price: ${album.price}SEK</p>
            <input id="quantity${album.id}" type="number" onclick="addOrSubtract('${album.id}')" value="${album.quantity}" />
            <p id="totalSum${album.id}">Total: ${album.totalSum} SEK</p>
    </article>` ;
}

