import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // импортируем компонент (./ - импорт из файла той же папки)
import AppTest from './AppTest';  // импортируем компонент (./ - импорт из файла той же папки)

const root = ReactDOM.createRoot(document.getElementById('root'));
//  рендер результата функции App, результат возвращается в public -> index, реакт загружает основной файл index, рендерит остальные элементы и пропушивает их на места в разметке страницы
//  <App /> - компонент, по сути функция которая возвращает html-код
//  Формат  <App /> - JSX

root.render(        
  <React.StrictMode> 
    <App />
    {/*<AppTest />   добавляем компонент в разметку */}
  </React.StrictMode>
);
