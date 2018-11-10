import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>  {
  return(
    <Link className="new-game" to={`/guess`}>
      NEW GAME
    </Link>
  )
}

export default Home