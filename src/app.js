import React from 'react'
import ReactDOM from 'react-dom'

const title = 'My react app'

const App = () => {
    return <div> My React App</div>
}

const element = document.getElementById('app')
ReactDOM.render(<App />, element)
