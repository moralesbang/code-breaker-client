import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants'

class Game extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.guess = this.guess.bind(this)
    this.state = {
      attempt: '',
      result: ''
    }
  }

  componentWillMount() {
    const secret = Math.floor(1000 + Math.random() * 9000)
    axios.post(`${BASE_URL}/guess`, { secret: secret })
  }

  handleChange(event) {
    this.setState({ attempt: event.target.value })
  }

  guess(event) {
    event.preventDefault()
    axios.get(`${BASE_URL}/guess/${this.state.attempt}`)
      .then(
        res => this.setState({ result: res.data.message }),
        error => console.log('An error ocurred. ', error)
      )
  }

  render() {

    let prettyResult = this.state.result.split('').join(' ')

    return(
      <div className="game">
        <form onSubmit={this.guess}>
          <input type="number" onChange={this.handleChange}/>
          <input type="submit" value="GUESS"/>
        </form>

        <div className="result">{prettyResult}</div>
      </div>
    )
  }
}

export default Game