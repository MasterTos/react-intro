import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm/>
    </header>
)

const SearchForm = () => {
    return (
        <form>
        <input type="text"/>
        <button type="submit">Search</button>
        </form>
    )
}

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
            {props
                .items
                .map(item => (
                    <li>{item}</li>
                ))}
        </ul>
    )
}

const Content = (props) => (
    <section>
        <p>
            {props.description}
        </p>
        <Items items={props.items}/>
    </section>
)

const App = () => {
    const title = 'Front techs react'
    const description = 'This is a simple react application'
    const items = ["Oliver", "John", "Tobey"]
    return (
        <section>
            <Header title={title}/>
            <Content description={description} items={items}/>
        </section>
    )
}

const AppWithoutDescription = () => (<Header title="No description here"/>)

const element = document.getElementById('app')
ReactDOM.render(
    <App/>, element)
