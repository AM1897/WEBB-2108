import Header from "./components/header/Header";
import Routing from "./utils/routing/Routing";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Footer from "./components/footer/Footer";


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
