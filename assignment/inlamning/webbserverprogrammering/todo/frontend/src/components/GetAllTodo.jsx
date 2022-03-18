import TodosService from '../utils/api/service/TodosService'
import {useState} from "react";
import CardList from "./CardList";

const GetAllTodo = () => {
    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        TodosService.getAllTodos()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <h1 data-testid='header'>GetAllTodo</h1>
            <button onClick={fetchDataFromExternalApi}>
                Get All Todo
            </button>
            <CardList todo={data}/>
        </>
    )
}
export default GetAllTodo