import style from './SearchBox.module.css'
import {useState} from "react";

export default function SearchBox(){

    const [searchField, setSearchField] = useState('')

    return(
        <section className={style.section}>
            <input className={style.input}
                   type='search'
                   placeholder='Sök'
                   value={searchField}
                   onChange={event => setSearchField(event.target.value)}/>
        </section>
    )
}