import css from './SearchBox.module.css'
import {useState} from "react";

export default function SearchBox(){

    const [searchField, setSearchField] = useState('')


    return(
        <section className={css.section}>
            <input className={css.input}
                   type='search'
                   placeholder='Sök produkt'
                   value={searchField}
                   onChange={event => setSearchField(event.target.value)}/>
        </section>
    )
}