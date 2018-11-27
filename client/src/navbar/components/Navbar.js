import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import { withRouter } from 'react-router'
import { checkAuth } from '../../auth/checkAuth'


const cookies = new Cookies()

class Navbar extends Component {
  constructor(props){
    super(props)
  }

  logout = (e) => {
    e.preventDefault()
    cookies.remove('pieces_secret')
    this.props.history.replace("/pieces")

  }

  login = (e) => {
    this.props.history.replace("/login")
  }

  render () {
  
    const { loggedIn } = this.props
    const currentRoute = window.location.pathname
    return (
      <div>
        { loggedIn && currentRoute != "/pieces_dashboard" ? <a href="pieces_dashboard">Kelly's Dashboard</a> : null }
        { !loggedIn && currentRoute != '/login'? <button onClick={this.login}>login</button> : null }
        { loggedIn? <button onClick={this.logout}>logout</button> : null }
        
      </div>
    )
  }
}

export default withRouter(checkAuth(Navbar))