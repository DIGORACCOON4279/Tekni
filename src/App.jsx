import Storage from "./components/Storage/Storage";
import Body from "./components/Body/Body";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <>
      <Body/>
      <NavBar/>
      <ItemListContainer greeting=" ⚡ Get 35%  off on all our devices this Black Friday!!! ⚡."/>
      <Storage/>
    </>
  )
}

export default App
