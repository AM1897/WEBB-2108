import { useContext} from "react";
import AlbumContext from "../../context/AlbumContext";
import css from './CardItem.module.css'

export default function CardItem(props) {
    const productOnCartCtx = useContext(AlbumContext);

    const itemIsOnCart = productOnCartCtx.itemIsOnCart(props.id);
    const itemInCart = productOnCartCtx.itemInCart(props.id);

    function toggleProductOnCartStatusHandler(){
        if (itemIsOnCart) {
            const increasedByOne = itemInCart.quantity + 1;
            productOnCartCtx.updateProduct(props.id, increasedByOne)
        } else {
            productOnCartCtx.addProduct({
                id: props.id,
                image: props.image,
                name: props.name,
                price: props.price,
                quantity: 1,
                totalSum: props.price
            });
        }
    }

    return (
        <article>
            <div>
                <img className={ css.image } src={props.image} alt={props.name}/>
            </div>
            <div>
                <h3>{props.name}</h3>
                <p data-testid='name'>{props.price}Kr</p>
            </div>
            <div>
                <button data-testid='buy'
                        className={ css.byeButton }
                        id={props.id}
                        onClick={toggleProductOnCartStatusHandler}>Köp</button>
            </div>
        </article>
    )
}
