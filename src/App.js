import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter> */}
      <h1>hallo leute</h1>
      <Home />
    </div>
  );
}

export default App;
