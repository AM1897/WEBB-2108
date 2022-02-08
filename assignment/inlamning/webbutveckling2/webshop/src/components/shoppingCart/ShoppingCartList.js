import {useContext} from "react";
import ShoppingCartItem from './ShoppingCartItem'
import AlbumContext from "../../context/AlbumContext";
import css from './ShoppingCartList.module.css'


export default function ShoppingCartList(props) {
    const productOnCartCtx = useContext(AlbumContext);

    function cancelHandler() {
        props.onCancel();
    }

    function pay() {
        alert('Tack för din betalning!')
    }

    return (
        <div>
            <div>
                <div className={css.dropdownContent}>
                    <h2 data-testid='products'>Dina produkter</h2>
                    <hr className={css.hr}/>
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
                    <hr className={css.hr}/>
                    <section className={css.totalSum}>
                        <h3>Antal: {productOnCartCtx.totalAlbumInCart}</h3>
                    </section>
                    <section className={css.totalSum}>
                        <h3>Totalsumma: {productOnCartCtx.totalSumInCart}</h3>
                    </section>
                    <article>
                        <h3>{productOnCartCtx.totalSumInCart >= 259 ? 'Du har nu fri frakt!' : (259 - productOnCartCtx.totalSumInCart) + 'kr kvar till fri frakt'}</h3>
                    </article>
                    <section className={css.endButton}>
                        <button className={css.closeButton} onClick={cancelHandler}>
                            X
                        </button>
                        <button data-testid='pay' className={css.payButton} onClick={pay}>
                            Betala
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}