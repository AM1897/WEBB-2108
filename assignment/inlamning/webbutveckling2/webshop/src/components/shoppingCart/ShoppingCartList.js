import {useContext} from "react";
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartContext from "../../context/ShoppingCartContext";
import style from './ShoppingCartList.module.css'


export default function ShoppingCartList(props) {
    const productOnCartCtx = useContext(ShoppingCartContext);

    function cancelHandler() {
        props.onCancel();
    }

    function pay() {
        alert('Tack för din betalning!')
    }

    return (
        <div>
            <div>
                <div className={style.dropdownContent}>
                    <h2>Dina produkter</h2>

                    {
                        productOnCartCtx.productOnCart.map((user, index) => {
                            return (
                                <ShoppingCartItem
                                    key={index}
                                    id={productOnCartCtx.productOnCart[index].id}
                                    image={productOnCartCtx.productOnCart[index].image}
                                    name={productOnCartCtx.productOnCart[index].name}
                                    price={productOnCartCtx.productOnCart[index].price}
                                    quantity={productOnCartCtx.productOnCart[index].quantity}
                                    totalSum={productOnCartCtx.productOnCart[index].totalSum}
                                />
                            )
                        })
                    }

                    <section className={style.totalSum}>
                        <h3>Antal: {productOnCartCtx.totalAlbumInCart}</h3>
                    </section>
                    <section className={style.totalSum}>
                        <h3>Totalsumma: {productOnCartCtx.totalSumInCart}</h3>
                    </section>
                    <article>
                        <h3>{productOnCartCtx.totalSumInCart >= 259 ? 'Tack för att ni handlar hos oss, nu bjuder vi på fri frakt' : (259 - productOnCartCtx.totalSumInCart) + ' kr kvar till fri frakt'}</h3>
                    </article>
                    <section className={style.endButton}>
                        <button className={style.closeButton} onClick={cancelHandler}>
                            X
                        </button>
                        <button className={style.payButton} onClick={pay}>
                            Betala
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}