import './Header.css'
import Kundkorg from "../kundkorg/Kundkorg";

function Header() {
    function openMenu() {
        document.getElementById('dropdown')
            .classList.toggle('show')
    }

    return(
        <header className='container'>
            <section>
                <article className='grid-item'>MaxDan</article>
            </section>
            <section>
                <label id="search">Sök</label><input type="text" value='Sök'/>
            </section>
            <section>
                <Kundkorg/>
            </section>
        </header>
    )
}
export default Header