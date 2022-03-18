import TodosService from '../utils/api/service/TodosService'
import {useState} from "react";
import CardList from "./CardList";

const CreateTodo = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [todo, setTodo] = useState('')

    const sendDataToApi = () => {
        const newName = {
            'name': name,
            'age': age,
            'todo': todo
        }
        TodosService.createTodos(newName)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <h1 data-testid='header'>CreateTodos</h1>
            <input type="text" value={name}
                   onChange={e => setName(e.target.value)}/>
            <input type="text" value={age}
                   onChange={e => setAge(e.target.value)}/>
            <input type="text" value={todo}
                   onChange={e => setTodo(e.target.value)}/>
            <button onClick={sendDataToApi}>
                Create New Name
            </button>

            <CardList todo={data}/>
        </>
    )
}

export default CreateTodo