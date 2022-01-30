import css from './AlbumView.module.css'
import CardList from "../../../components/cardList/CardList";
import AlbumsData from "../../data/AlbumsData";


function AlbumView() {
    return(
        <div className={css.gridContainer}>
            <CardList AlbumData={AlbumsData}/>
        </div>
    )

}
export default AlbumView