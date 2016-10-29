import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {SearchForm} from './searchForm'
import {Router, Route, hashHistory, Link} from 'react-router'

const MovieList = (props) => (
    <ul>
        {props
            .movies
            .map((movie, i) => {
                return (
                    <li key={i}>{movie.Title}</li>
                )
            })}
    </ul>
)

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }
    onSearch(query) {
        axios
            .get(`http://www.omdbapi.com/?s=${query}&plot=short&r=json`)
            .then(response => {
                const movies = response.data.Search
                this.setState({movies: movies})
            })
    }
    render() {
        return (
            <section>
                <Nav/>
                <h1>Movie Collection</h1>
                <SearchForm
                    onSearchSubmit={this
                    .onSearch
                    .bind(this)}/>
                <MovieList movies={this.state.movies}/>
            </section>
        )
    }

}

const Home = () => (
    <section>
        <Nav/>
        <h1>Welcome</h1>
    </section>

)

const Nav = () => (
    <nav>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/search'>Search</Link>
        </li>
    </nav>
)

class Main extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Home}/>
                <Route path='/search' component={Search}/>
            </Router>
        )
    }
}

ReactDOM.render(
    <Main/>, document.getElementById('app'))