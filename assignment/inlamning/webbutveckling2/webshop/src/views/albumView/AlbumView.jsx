import CardList from "../../components/card/CardList";
import dataAlbum from "../../utils/data/dataAlbum";
import css from './AlbumView.module.css'

export default function AlbumView() {

    return (
        <main className={css.containerGrid}>
            <section>
            </section>
            <div className={css.gridContainer}>
                <CardList dataAlbum={dataAlbum}/>
            </div>
            <section>
            </section>
        </main>
    )
}