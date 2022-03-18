import Alive from "./components/Alive"
import './utils/global/global.css'
import GetAllTodo from './components/GetAllTodo'
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";
import DeleteTodo from "./components/DeleteTodo";
import GetSingelDataByName from "./components/GetSingelDataByName";



function App() {
    return (
        <>
            <h1>TODO</h1>
            <Alive/>
            <GetAllTodo/>
            <CreateTodo/>
            <UpdateTodo/>
            <DeleteTodo/>
            <GetSingelDataByName/>
        </>
    )
}

export default App;
