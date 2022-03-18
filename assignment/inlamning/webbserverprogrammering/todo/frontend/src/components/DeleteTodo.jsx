import TodosService from "../utils/api/service/TodosService";
import {useState} from "react";

const DeleteTodo = () => {
    const [data, setData] = useState('')
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TodosService.deleteTodos(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <h1>DeleteTodo</h1>
            <input type="text"
                   value={name}
                   onChange={e => setName(e.target.value)}/>
            <button data-testid='remove' onClick={sendDataToApi}>
                Delete Todo
            </button>
            <h3 data-testid='response'>{data}</h3>
        </>
    )
}

export default DeleteTodo