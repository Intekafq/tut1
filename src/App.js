import logo from './logo.svg';
import './App.css';
import Header from './design/Header';
import ComA from './design/ComA';
import { useState, createContext } from 'react';


const AppState = createContext();
const NameState = createContext();
function App() {
  const [data, setDate] = useState("worlddev")
  const [name, setName]= useState({name:"intekhab", age:20, email:"i@gmail.com"})
  return (
    <>
    <Header />
    <AppState.Provider value={data}>
    <NameState.Provider value={name}>
        <ComA  />
        </NameState.Provider>
      
        </AppState.Provider>
    </>
  );
  
}

export default App;
export {AppState,NameState}