import { useState } from "react";
import style from './Card.module.css'

const Card = ({name, age, todo}) => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive)
    }

    return (
        <div className={style.cursor}>
            <p className={isActive ? style.crossOut: null} onClick={toggleClass}>{name} {age} {todo}</p>
        </div>
    )
}

export default Card