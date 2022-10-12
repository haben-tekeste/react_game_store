import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"games/:id"} element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
