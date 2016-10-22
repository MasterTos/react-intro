import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm/>
    </header>
)

function onSearchClick(event) {
    event.preventDefault()
    console.log('onSearchClick', event)
}

const SearchForm = () => {
    return (
        <form>
            <input type="text"/>
            <button onClick={onSearchClick}>Search</button>
        </form>
    )
}

const MovieList = (props) => (
    <ul>
        {props
            .movies
            .map((movie, i) => {
                return (
                    <li key={i}>{movie.title}</li>
                )
            })}
    </ul>
)

const Content = (props) => (
    <section>
        <p>
            {props.description}
        </p>
        <Items items={props.items}/>
    </section>
)

const App = () => {
    const movies = [
        {
            title: 'Rogue One: A Star Wars Story'
        }, {
            title: 'Guardians of the Galaxy Vol. 2'
        }, {
            title: 'Doctor Strange'
        }
    ]
    return (
        <section>
            <h1>Movie Collection</h1>
            <SearchForm/>
            <MovieList movies={movies}/>
        </section>
    )
}

const AppWithoutDescription = () => (<Header title="No description here"/>)

const element = document.getElementById('app')
ReactDOM.render(
    <App/>, element)
