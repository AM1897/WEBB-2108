import Alive from "./components/Alive"
import './utils/global/global.css'
import GetAllUsers from './components/GetAllUsers'
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import GetSingelDataByName from "./components/GetSingelDataByName";



function App() {
    return (
        <>
            <h1>TODO</h1>
            <Alive/>
            <GetAllUsers/>
            <CreateUser/>
            <UpdateUser/>
            <DeleteUser/>
            <GetSingelDataByName/>
        </>
    )
}

export default App;
