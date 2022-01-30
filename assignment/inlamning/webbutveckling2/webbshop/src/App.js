import NavBar from "./components/navBar/NavBar";
import Routing from "./utils/router/Routing";
import './utils/global/css/global.css'
import Header from './components/header/Header'


function App() {
  return (
        <>
            <Header/>
            <Routing>
                <NavBar/>
            </Routing>
        </>
  )
}

export default App;
