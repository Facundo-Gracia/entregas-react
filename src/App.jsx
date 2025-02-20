import './App.css';
import Navbar from './components/nav-bar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greetings="Bienvenidos a la pasteleria n°1 de Argentina" />
   
    </>
  );
};

export default App;
