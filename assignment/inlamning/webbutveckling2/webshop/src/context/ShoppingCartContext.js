import { createContext, useState } from "react";

const ShoppingCartContext = createContext({
    productOnCart: [],
    totalAlbumInCart: 0,
    totalSumInCart: 0,
    addProduct: (selectedItem) => { },
    removeProduct: (productId) => { },
    updateProduct: (productId, newValue) => { },
    itemIsOnCart: (productId) => { },
    itemInCart: (productId) => { }
});

export function ShoppingCartContextProvider(props) {
    const [ itemsSelected, setItemsSelected] = useState([]);


    const [ totalAlbum, setTotalAlbum] = useState(0);


    const [ totalSumInCart, setTotalSumInCart] = useState(0);


    function addProductOnCartHandler(selectedItem) {

        let currentItems = [];

        setItemsSelected(prevItemsSelected => {

            currentItems = prevItemsSelected.concat(selectedItem);
            return currentItems;
        });


        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })


        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })

    }


    function removeProductOnCartHandler(productId) {

        let currentItems = [];

        setItemsSelected(prevItemsSelected => {

            currentItems = prevItemsSelected.filter(product => product.id !== productId );
            return currentItems;
        })


        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })


        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
    }


    function updateProductOnCartHandler(productId, newValue) {

        let currentItems = [];

        setItemsSelected(prevItemsSelected => {
            for (const product of prevItemsSelected) {
                if (product.id === productId) {
                    product.quantity = newValue
                    product.totalSum = product.price * product.quantity;
                }
            }

            currentItems = prevItemsSelected;
            return currentItems;
        })

        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })

        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
    }

    function itemIsProductOnCartHandler(productId) {
        return itemsSelected.some(product => product.id === productId);
    }

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
        <ShoppingCartContext.Provider value={ context }>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext;