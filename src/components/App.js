import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Home from './Home'
import Game from './Game'

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="container">
          <h1>CODE BREAKER</h1>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/guess' component={Game} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
