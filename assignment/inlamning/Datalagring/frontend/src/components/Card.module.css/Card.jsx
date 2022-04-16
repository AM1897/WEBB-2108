import style from './Card.module.css'
import {useState} from "react"
import TodosService from "../../utils/api/service/TodosService";

const Card = ({name, todo, todoIsDone, _id}) => {
    const [isTodoDone, setTodoIsDone] = useState(todoIsDone)
    const toggleIsDone = () => {
        const load = {
            newTodoStatus: !isTodoDone
        }
        TodosService.toggleTodoDone(_id, load)
            .then(response => {
                console.log(response.data)
                setTodoIsDone(response.data)
            }).catch(error => console.log(error))
    }

    return (

        <div className={isTodoDone ? style.crossOut : null} onClick={toggleIsDone}>
            <h4>{name} <br/> {todo}</h4>
            <p>{_id}</p>
        </div>
    )
}

export default Card