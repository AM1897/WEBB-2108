import cart from '../../utils/img/kundkorg.png'

function Kundkorg(){

    function openMenu(){
        document.getElementById('dropdown')
            .classList.toggle('show')
    }

    function closeMenu() {
        document.getElementById('dropdown')
            .classList.toggle('show', false)
    }
    function pay() {
        alert('Tack för din betalning')
    }

    return(
        <div id='dropdown-content'>
            <div onClick='openMenu()'>
                <img src={cart} onClick={openMenu} alt="kundkorg"
                    className='img'/></div>
            <button className='dropdown-button' onClick={openMenu}>Kundkorg
            </button>
            <div id='dropdown' className='dropdown-content'>
                <p>Kundkorg</p>
                <section>
                    <article id='allAddedAlbums'></article>
                    <article id='totalSumOfAddedAlbums'></article>
                    <article id='totalQuantityOfAddedAlbums'></article>
                    <article id='totalShippingOfAddedAlbums'></article>
                    <section>

                        <button onClick={closeMenu}>
                            Stäng
                        </button>
                        <button onClick={pay}>
                            Till Kassan
                        </button>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Kundkorg