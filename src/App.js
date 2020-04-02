import React from 'react';
import Movie from './components/Movie';
import Form from './components/Form';
import Person from './components/Person';
import Button from './components/Button';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: {
        loading: false,
        error: false,
        page: 1,
        searchValue: "",
        data: []
      },
      person: {
        name: "Jan",
        age: 28,
        hobby: "programming"
      }
    }
  }

  wijzigNaam = (str) => {
    this.setState({
      ...this.state,
      person: {
        ...this.state.person,
        name: str
      }
    })
  }

  searchMovies = str => {
    axios.get("http://www.omdbapi.com/?apikey=ed80cc66&s=" + str)
    .then(response => {
      this.setState({
        ...this.state,
        movies: {
            ...this.state.movies,
            searchValue : str,
            data: response.data.Search
          }
        })
      
    })
  }

  moreMovies = () => {
    console.log(this.state.movies.page + 1)
    axios.get(`http://www.omdbapi.com/?apikey=ed80cc66&s=${this.state.movies.searchValue}&page=${this.state.movies.page + 1}`)
    .then(response => {
      this.setState({
        ...this.state,
        movies: {
          ...this.state.movies,
          page: this.state.movies.page + 1,
          data: response.data.Search
        }
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Form searchMovies={this.searchMovies} wijzigNaam={this.wijzigNaam}/>
        <Button moreMovies={this.moreMovies}/>
        <Movie data={this.state.movies.data}/>
        <Person data={this.state.person}/>
      </div>
    );
  }
  
}

export default App;
