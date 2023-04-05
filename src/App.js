import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";  // обработчик энд-поинтов
import Home from "./routes/Home";
import About from "./routes/About";
import Details from "./components/Details";
import "./App.css";

function App(){
  return <Router>  {/* берет URL и сопоставляет со всеми route-ами, если находимся то такому пути - отображаем указаный элемент <Navigation/>*/}
    <div>  
      <ul className="App-header">  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to={{
            pathname: "/about",
            state:{
              fromLocation: true
            }
          }}>About Us</Link>  
        </li>
      </ul>  
      <Routes>
        <Route path="/" exact={true} Component={Home}/>        {/* exact - свойство по отображению конкретного пути */}
        <Route path="/about" Component={About}/>
        <Route path="/movie-details" Component={Details}/>
      </Routes>
    </div>  
  </Router>
}

export default App;