import UsersService from "../utils/api/service/UsersService";
import {useState} from 'react'
import Card from './Card.module.css/Card'

const UpdateUser = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [newName, setNewName] = useState('')
    const [age, setAge] = useState('')
    const [todo, setTodo] = useState('')

    const sendDataToApi = () => {
        const changedUser = {
            'name': name,
            'newName': newName,
            'age': age,
            'todo': todo
        }
        UsersService.updateUser(changedUser)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <h1>UpdateUser</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
            <input type="text" value={age} onChange={e => setAge(Number(e.target.value))}/>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
            <button onClick={sendDataToApi}>
                Update New User
            </button>

            {data.name ? <Card name={data.name}
                               age={data.age}
                               gender={data.todo}/>
                : <h3>{data}</h3>}
        </>
    )
}

export default UpdateUser

