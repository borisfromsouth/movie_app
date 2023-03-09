import React from 'react';
import PropTypes from 'prop-types';

/*function App() {
  return (  // если компонент использует функцию -
    <div>

    </div>
  );
}*/

class App extends React.Component{  // extends задает что App расширяет функционал класса React.Component

  state = {
    count: 0
  };

  plus = () => {
    this.setState({count: this.state.count + 1});  // setState перезаписывает состояние и вызывает render для обноления страницы
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1})); // правильный вид оформления    current - текущее состояние компанента state
  }

  render(){  // функция выводит html из этого компонента и вызывается при отбражении компонента автоматически
    return <div>
        <h1>Текущее число: {this.state.count}</h1>
        <button onClick={this.plus}>Плюс</button>
        <button onClick={this.minus}>Минус</button>
      </div>
  }
}

export default App; // экспорт файла с компонентами