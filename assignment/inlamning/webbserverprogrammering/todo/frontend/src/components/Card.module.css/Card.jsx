import {useState} from "react";
import style from './Card.module.css'
import TodosService from "../../utils/api/service/TodosService"

const Card = ({name, age, todo, taskIsDone, id}) => {

    const [isDone, setIsDone] = useState(taskIsDone)

    function toggleIsDone() {
        TodosService.trueOrFalse(id)
            .then(response => {
                setIsDone(response.data.taskIsDone)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={style.cursor}>
            <p className={isDone ? style.crossOut : null} onClick={toggleIsDone}>{name}  {age}  {todo}</p>
        </div>
    )
}

export default Card