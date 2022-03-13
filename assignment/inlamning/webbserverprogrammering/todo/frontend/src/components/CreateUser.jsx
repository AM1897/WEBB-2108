import UsersService from '../utils/api/service/UsersService'
import {useState} from "react";
import Card from './Card.module.css/Card'
import CardList from "./CardList";

const CreateUser = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [todo, setTodo] = useState('')

    const sendDataToApi = () => {
        const newUser = {
            'name': name,
            'age': age,
            'todo': todo
        }
        UsersService.createUser(newUser)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <h1 data-testid='header'>CreateUser</h1>
            <input type="text" value={name}
                   onChange={e => setName(e.target.value)}/>
            <input type="text" value={age}
                   onChange={e => setAge(e.target.value)}/>
            <input type="text" value={todo}
                   onChange={e => setTodo(e.target.value)}/>
            <button onClick={sendDataToApi}>
                Create New User
            </button>

            <CardList users={data}/>
        </>
    )
}

export default CreateUser