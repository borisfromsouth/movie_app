import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';  // обработчик энд-поинтов
import Home from "./routes/Home";
import About from "./routes/About";

///
/// Создание 
///

function App(){
  return <HashRouter>
    <Routes>
      {/* <Route path="/" element={<Home/>}/>        отображается всегда если endpoint идет сразу после localhost-а */}
      <Route path="/">
        <h1>Main Page</h1>
      </Route>
      <Route path="/about" element={<About/>}/>  {/* если находимся то такому пути - отображаем указаный элемент */}
    </Routes>
  </HashRouter>
}

export default App;