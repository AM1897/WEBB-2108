import {useState} from "react";
import MyAPIService from "../utils/api/service/MyAPIService";


const Alive = () => {
    const [data, setData] = useState('')

    const checkApiStatus = () => {
        MyAPIService.Alive()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <h1>Alive</h1>
            <button onClick={checkApiStatus}>
                Check if API is Alive
            </button>
            <h3>{data}</h3>
        </>
    )
}

export default Alive