import {useState} from "react";
import MyAPIService from "../utils/api/service/MyAPIService.js";


const Alive = () => {
    const [data, setData] = useState('')

    function checkApiStatus() {
        MyAPIService.Alive()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData(){
        if (data.length !== 0){
            return <h3>Response from API "{data}"</h3>
        }
    }

    return (
        <>
            <h1>Alive</h1>
            <button onClick={() => checkApiStatus()}>
                Check if API is Alive
            </button>
            <h3>{displayData()}</h3>
        </>
    )
}

export default Alive