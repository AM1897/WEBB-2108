import UsersService from "../utils/api/service/UsersService";
import { useState } from "react";
import Card from "./Card.module.css/Card";

const GetSingelDataByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
      UsersService.getSingleDataByName(name)
          .then(response => {
              setData(response.data)
          })
          .catch(error => console.log(error))
    }
    console.log(data)
    return(
        <>
            <div>
                <h1 data-testid='header'>Get Single Data By Name</h1>
                Name: <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                <button onClick={sendDataToApi}>Get Singel Data By Name</button>
                {data.name ? <Card name={data.name}
                                   age={data.age}
                                   gender={data.gender}/>
                : <h3>{data}</h3>}
            </div>
        </>
    )
}

export default GetSingelDataByName