import React, { Component } from 'react'
import axios from "axios"
import PiecesDashboard from './PiecesDashboard'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class UploadPieceView extends Component {
    constructor(props){
        super(props)
        this.state = {
            authenticated: false
        }

        let piecesPassCookie = cookies.get('pieces_secret')

        if(piecesPassCookie){
            this.state.authenticated = true
        }
    }

    handleSubmit = async (e) => {

        e.preventDefault()
        const {pieces_pass} = e.target
        const valueEntered = pieces_pass.value
        let result = await axios.get("api/auth", { headers: { 'Authorization': 'Basic ' + valueEntered } })
        

        if(result && result.data){
            if(result.data.secret){
                cookies.set('pieces_secret', result.data.secret)
                this.setState({authenticated: true})
            }
        }
    
        
    }
    render () {
        const { authenticated } = this.state
        return (
            <div>


                {!authenticated? <form onSubmit={this.handleSubmit}>
                    <p>Enter the fucking password, Kelly.</p>
                    <input name="pieces_pass" placeholder="Enter fucking pass Kelly...."/>

                </form> : null}
                {authenticated? <PiecesDashboard/> : <p>fucking sign in Kelly</p>}
            </div>
        )
    }
}

export default UploadPieceView