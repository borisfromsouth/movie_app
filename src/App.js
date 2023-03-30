import React from 'react';
import axios from 'axios';  // библиотека для отправки запросов
import Movie from './Movie';
import './App.css';  // css-файл просто импортируется

class App extends React.Component{ 

  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount(){  // отрабатывает только один раз
    //setTimeout(() => {this.setState({isLoading: false})}, 2000);  // использовать функцию после выдержки в 2 сек
    this.getMovies();
  }

  getMovies = async () => {
    //const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');  // запрос к Api на получение списка фильмов
    //console.log(movies.data.data.movies);  // путь взят после просмотра полученного ответа object

    // ответ на запрос - большой вложенный ответ, мы прописывем путь до конкретных данных
    const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');  // обращение напрямую к внутренним компонентам полученного объекта + добавил sort_by для получения отсортированного по рейтингу массива фильмов
    //console.log(movies);
    this.setState({movies: movies, isLoading: false});
  }

  render(){ 
    const {isLoading, movies} = this.state;  // выгружаем state в переменные (привзяка одинаковых имен)
    return <section className='container'>  {/* возращаем блок */}
      {isLoading ? 
      <div className="loader">  {/* если в процессе загрузки - возращаем блок с сообщением */}
        <span className="loader__text">Загрузка...</span>
      </div> 
      : 
      <div className='movies'>
        { movies.map((movie, index) => 
          (<Movie key={index} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} genres={movie.genres} poster={movie.medium_cover_image} />)
          )}
      </div>}
    </section>;
  }

}

export default App;