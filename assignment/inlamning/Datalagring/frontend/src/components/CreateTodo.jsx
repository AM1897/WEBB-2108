import TodosService from '../utils/api/service/TodosService'
import {useState} from "react";
import CardList from "./CardList";

const CreateTodo = () => {
    const [data, setData] = useState([])
    const [todo, setTodo] = useState('')
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        const newName = {
            'name': name,
            'todo': todo,
            'todoIsDone': false
        }
        TodosService.createTodos(newName)
            .then(response => {
                setData(response.data)
            }).catch(error => console.log(error))
    }
    return (
        <>
            Namn: <input type="text"
                         value={name}
                         onChange={e => setName(e.target.value)}/>
            Todo: <input type="text"
                         value={todo}
                         onChange={e => setTodo(e.target.value)}/>
            <button onClick={sendDataToApi}>
                Skapa ny användare
            </button>
            {data.name ? <CardList name={data.name}
                                   todo={data.todo}
                                   _id={data._id}/>
                : ''}

        </>
    )
}

export default CreateTodo