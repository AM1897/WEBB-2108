import Header from "./components/header/Header";
import Routing from "./utils/routing/Routing";
import NavigationBar from "./components/navigationBar/NavigationBar";



function App() {
  return (
      <>
        <Header/>
        <Routing>
          <NavigationBar/>
        </Routing>
      </>
  );
}

export default App;
