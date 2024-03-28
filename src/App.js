import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import ItemDetails from "./components/detailsPage/ItemDetails";
import Nav from "./components/main/Nav";

function App() {
  return (
    <div className="App" style={{border:"2px solid yellow",width:"100vw"}}>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<ItemDetails />} />

        </Routes>
  </BrowserRouter>
    
      
    </div>
  );
}

export default App;
