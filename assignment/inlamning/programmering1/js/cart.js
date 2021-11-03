
//Shopping korg
class AlbumToBye {
    constructor(id, name, image, price) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.quantity = 1
        this.totalSum = price
    }
}

let myCart = []             //Mina album i en tom array
let totalSumCart = 0        //Total summa i kundvagnen
let quantityInCart = 0      //Antal album i kundvagnen

//Antalet av album. Om man har en så skall den uppdatera antal
function buttonBye(id, name, image, price) {
    let exist = updateAlbumInCart(id);

//Finn det album? Nej! lägg till i kundvagnen
    if (exist === false) {
        let newAlbum = new AlbumToBye(id, name, image, price)
        myCart.push(newAlbum)
    }
    renderCart()
}

//renderar album via knapp loop till kundvagnen
function renderCart() {
    let renderCartAlbums = [];
    for (const item of myCart) {
        renderCartAlbums.push(showAlbum(item))
    }
    document.getElementById('allAddedAlbums').innerHTML = renderCartAlbums


    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}

//
function showAlbum(album) {
    return `
    <article id="albumToBye${album.id}">
        <img src=${album.image} alt=${album.name} class="imgAlbumCart" id=${album.image}>
        <p>${album.name}</p>
        <p>Pris: ${album.price}:-</p>
        <input id="quantity${album.id}" type="number" onclick="addMore('${album.id}')" value="${album.quantity}" />
        <p id="totalSum${album.id}">Total: ${album.totalSum}:-</p>
    </article>
    `;
}

function showTotalSum(totalSum) {
    return `
    <article id="totalShowOfAddedAlbums">
        <p>Totalpris: ${totalSum}</p>
        </article>
        `;
}

function showTotalQuantity(quantity) {
    return `
    <article id="totalQuantityOfAddedAlbums">
        <p>Antal: ${quantity}</p>
        </article>
        `;
}

function showShippingCost(shippingText) {
    return `
    <article id="totalShippingCostOfAddedAlbums">
        <p>${shippingText}</p>
        </article>
        `;
}

function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show', false)
}

function updateAlbumInCart(id) {
    let existInCart = false
    for (const item of myCart) {
        if (item.id == id) {
            item.quantity += 1
            item.totalSum = item.price * item.quantity;
            existInCart = true
        }
    }
    return existInCart
}

function calculateTotalSumInCart() {
    totalSumCart = 0

    for (const item of myCart) {
        totalSumCart += parseInt(item.totalSum)
    }
    document.getElementById('totalSumOfAddedAlbums').innerHTML = showTotalSum(totalSumCart)
}

function calculateShipping() {
    let costToFreeFreight = 259 - totalSumCart;
    let costTest = ""

    if (costToFreeFreight <= 0) {
        costTest = "Grattis till fri frakt"
    } else {
        costTest = "Behöver" + costToFreeFreight + " kr till fri frakt"
    }
    document.getElementById('totalShippingOfAddedAlbums').innerHTML = showShippingCost(costTest)
}

function calculateTotalQuantityInCart() {
    quantityInCart = 0

    for (const item of myCart) {
        quantityInCart += parseInt(item.quantity)
    }

    document.getElementById('totalQuantityOfAddedAlbums').innerHTML = showTotalQuantity(quantityInCart)
}

function addMore(id) {
    let newValue = document.getElementById("quantity" + id).value;
    if (parseInt(newValue) <= 0) {
        for (let i = 0; i < myCart.length; i++) {
            if (myCart[i].id == id) {
                myCart.splice(i, 1);
                document.getElementById("albumToBy" + id).remove()
            }
        }
    } else {
        let totalSum = updateAlbumInCartWithNewValue(id, newValue)
        if (!!totalSum) {
            document.getElementById("totalSum" + id).innerText = "Total: " + totalSum + ":-";
        }
    }
    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}

function pay() {
    alert('Tack för din betalning')
}

function inputButton() {
    alert('Testa ett annat sökord')
}

renderCart()


