import TodosService from "../utils/api/service/TodosService";
import {useState} from "react";
import Card from "./Card.module.css/Card";

const GetSingelDataByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TodosService.getSingleTodosByName(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div>
                <h1 data-testid='header'>Get Single Todo By Name</h1>
                Name: <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                <button onClick={sendDataToApi}>Get Singel Todo By Name</button>
                {data.name ? <Card name={data.name}
                                   age={data.age}
                                   todo={data.todo}/>
                    : <h3>{data}</h3>}
            </div>
        </>
    )
}

export default GetSingelDataByName