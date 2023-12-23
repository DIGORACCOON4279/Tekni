
import Body from "./components/Body/Body";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Body/>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundo"/>
    </>
  )
}

export default App
