import {useState} from "react";
import ShoppingCartList from "../shoppingCart/ShoppingCartList";
import style from './Header.module.css';
import cart from '../../utils/global/image/kundvagn.png';
import SearchBox from "../searchBox/SearchBox";


function Header(props) {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    function cartHandler() {
        setCartIsOpen(true);
        console.log('clicked')
        console.log(props.text)
    }

    function closeCartHandler() {
        if (cartIsOpen === true) {
            setCartIsOpen(false);
        }
    }

    function messageExitPayment() {
        alert('Tack för betalningen')
    }

    return (
        <header>
            <div className={style.gridContainer}>
                <section className={style.sectionLogo}>
                    <h1 data-testid='header'>MAXDAN</h1>
                </section>
                <section>
                    <SearchBox/>
                </section>
                <section className={style.sectionCart}>
                    <img className={style.imageCart}
                         src={cart}
                         alt="cart" onClick={() => {
                        cartHandler()
                        closeCartHandler()
                    }}/>
                    <br/>
                    <button
                        className={style.dropdownButton}
                        onClick={() => {
                            cartHandler()
                            closeCartHandler()
                        }}>Varukorg
                    </button>
                    {cartIsOpen && <ShoppingCartList onCancel={closeCartHandler} onConfirm={messageExitPayment}/>}
                </section>
            </div>
        </header>
    )
}

export default Header