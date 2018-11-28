import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/components/Navbar'
import PiecesView from './all_pieces/components/PiecesView'
import PiecesDashboardView from './pieces_dashboard/components/View'
import Login from './auth/Login'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route exact path='/home' component={PiecesView} />
          <Route
            exact
            path='/pieces_dashboard'
            component={PiecesDashboardView}
          />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

export default App
