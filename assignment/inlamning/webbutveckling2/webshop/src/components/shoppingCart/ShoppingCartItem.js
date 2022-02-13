import style from './ShoppingCartItem.module.css'
import {useContext} from "react";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import remove from '../../utils/global/image/trash.png'


export default function ShoppingCartItem(props) {
    const productOnCartCtx = useContext(ShoppingCartContext);

    const itemIsOnCart = productOnCartCtx.itemIsOnCart(props.id);

    function removeProductInCartHandler() {
        if (itemIsOnCart) {
            productOnCartCtx.removeProduct(props.id)
        }
    }

    function updateProductInCartHandler(newValue) {
        console.log(newValue);
        if (itemIsOnCart) {
            productOnCartCtx.updateProduct(props.id, newValue);
        }
    }

    return (
        <div>
            <ul>
                <section className={style.gridContainer}>
                    <article>
                        <img src={remove} alt="remove" className={style.remove} onClick={removeProductInCartHandler}/>
                    </article>
                    <article>
                        <img
                            src={props.image}
                            alt={props.name}
                            className={style.imageCart}/>
                        <h3>Namn: {props.name}</h3>
                    </article>
                    <article>
                        <input data-testid='inputValue'
                               onChange={(e) => updateProductInCartHandler(Number(e.target.value))}
                               className={style.input}
                               type="number"
                               min='0'
                               value= {props.quantity}/>
                    </article>
                    <article>
                        <h3>Pris: {props.totalSum} :- </h3>
                    </article>
                </section>
            </ul>
        </div>
    )
}
