import React from 'react';
import PropTypes from 'prop-types';

class AppTest extends React.Component{  // extends задает что App расширяет функционал класса React.Component

  constructor(props){  // конструктор (не элемент React, а обычного JS) 
    super(props);      // super - аналог base в .Net
    console.log('Constructor');
  };

  state = {
    count: 0
  };

  plus = () => {  // фцнкции класса
    this.setState(current => ({count: current.count + 1}));  // setState перезаписывает состояние и вызывает render для обноления страницы
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1}));  // правильный вид оформления   current - текущее состояние компанента state
  }

  componentDidMount(){  // монтирование компонета в разметку странцы после рендеринга 
    console.log('Montage');
  }

  componentDidUpdate(){  // обновление компонета в разметке странцы
    console.log('UI Updated');
  }

  componentWillUnmount(){  // удаление компонета с разметки странцы
    console.log('Component remove');
  }

  render(){  // функция выводит html из этого компонента и вызывается при отбражении компонента автоматически
    console.log('Rendering');
    return <div>
        <h1>Текущее число: {this.state.count}</h1>
        <button onClick={this.plus}>Плюс</button>
        <button onClick={this.minus}>Минус</button>
      </div>
  }
}

export default AppTest;  // экспорт файла с компонентами