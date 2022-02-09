import { createContext, useState } from "react";

const AlbumContext = createContext({
    productOnCart: [],
    totalAlbumInCart: 0,
    totalSumInCart: 0,
    addProduct: (selectedItem) => { },
    removeProduct: (productId) => { },
    updateProduct: (productId, newValue) => { },
    itemIsOnCart: (productId) => { },
    itemInCart: (productId) => { }
});

export function AlbumContextProvider(props) {
    //Album i varukorgen
    const [ itemsSelected, setItemsSelected] = useState([]);

    //Total antal album i varukorgen
    const [ totalAlbum, setTotalAlbum] = useState(0);

    //Slutsumman för alla album i varukorgen
    const [ totalSumInCart, setTotalSumInCart] = useState(0);

    //Lägger till nytt album i varukorgen
    function addProductOnCartHandler(selectedItem) {
        //Temp variable för att lagra alla album från useState
        let currentItems = [];

        setItemsSelected(prevItemsSelected => {
            //Hämtar alla album då setItemsSelected är async så måste hämta album från selected
            currentItems = prevItemsSelected.concat(selectedItem);
            return currentItems;
        });

        //Fråga om hur han skulle ha gjort här
        //Räknar ut antalet
        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })

  //Räknar ut total summa
        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
        //Till hit
    }

    //Tar bort album/antal/pris/totalsumma i varukorg
    function removeProductOnCartHandler(productId) {
        //Temp variable för att lagra alla album från useState
        let currentItems = [];

        setItemsSelected(prevItemsSelected => {
            //Hämtar alla album då setItemsSelected är async så måste hämta album från selected
            currentItems = prevItemsSelected.filter(product => product.id !== productId );
            return currentItems;
        })

        //Räknar ut antalet
        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })

        //Räknar ut totalsumman
        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
    }

    //Får album ett nytt värde, så uppdateras pris/antal/totalsumma
    function updateProductOnCartHandler(productId, newValue) {
        //Temp variable för att lagra alla album från useState
        let currentItems = [];

        setItemsSelected(prevItemsSelected => {
            for (const product of prevItemsSelected) {
                if (product.id === productId) {
                    product.quantity = newValue
                    product.totalSum = product.price * product.quantity;
                }
            }
            //Hämtar alla album då setItemsSelected är async så måste hämta album från selected
            currentItems = prevItemsSelected;
            return currentItems;
        })

        //Räknar ut antalet
        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })

        //Räknar ut totalsumman
        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
    }

    //Kollar om albumet finns i varukorgen
    function itemIsProductOnCartHandler(productId) {
        return itemsSelected.some(product => product.id === productId);
    }

    //Hämtar ett album från varukorgen om det finns annars undefined
    function productInCartHandler(productId) {
        return itemsSelected.find(product => product.id === productId);
    }

    const context = {
        productOnCart: itemsSelected,
        totalAlbumInCart: totalAlbum,
        totalSumInCart: totalSumInCart,
        addProduct: addProductOnCartHandler,
        removeProduct: removeProductOnCartHandler,
        updateProduct: updateProductOnCartHandler,
        itemIsOnCart: itemIsProductOnCartHandler,
        itemInCart: productInCartHandler
    };

    return (
        <AlbumContext.Provider value={ context }>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContext;