import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {SearchForm} from './searchForm'
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router'

const MovieList = (props) => (
    <ul>
        {props
            .movies
            .map((movie, i) => {
                return (
                    <li key={i}>
                        <h4>{movie.Title}</h4>
                        <img src={movie.Poster}/>
                    </li>
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
        if (props.location.query.s) {
            this.onSearch(props.location.query.s)
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

const avengersQuery = {
    pathname: '/search',
    query: {
        s: "Avengers"
    }
}

const batmanQuery = {
    pathname: '/search',
    query: {
        s: "Batman"
    }
}

const drstrangeQuery = {
    pathname: '/search',
    query: {
        s: "Doctor Strange"
    }
}

const Home = () => (
    <section>
        <h1>This is home</h1>
        <ul>
            <li>
                <Link to={batmanQuery}>Batman</Link>
            </li>
            <li>
                <Link to={avengersQuery}>Avengers</Link>
            </li>
            <li>
                <Link to={drstrangeQuery}>Doctor Strange</Link>
            </li>
        </ul>
    </section>
)

const MovieDetail = () => (
    <section>
        <h1>Movie detail</h1>
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
        <li>
            <Link to='/detail'>Deatil</Link>
        </li>
    </nav>
)

const App = props => (
    <section>
        <Nav/> {props.children}
    </section>
)

class Main extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='search' component={Search}/>
                    <Route path='detail' component={MovieDetail}/>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(
    <Main/>, document.getElementById('app'))