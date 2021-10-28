function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.remove('show')
}

function addOrSubtract(id) {
    let newQuantity = document.getElementById('quantity' + id).value;
    for (const album of buyAlbumsToCarts) {
        if (album.id == id) {
            album.quantity = newQuantity;
            album.totalSum = album.price * album.quantity;
            document.getElementById('totalSum' + id).innerText = "Total:" + album.totalSum + "SEK";
        }
    }
}