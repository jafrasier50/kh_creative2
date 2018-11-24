import React, { Component } from 'react'
import styled from 'styled-components'
import EditPiece from "./EditPiece"

const StyledPiece = styled.div`

    background-color: lightgray;
    padding: 15px;
    max-width: 200px;
    margin: 10px;
    img{
        max-width: 150px;
    }
`
class Piece extends Component {
    constructor(props) {
        super(props)
        const {
            title,
            description,
            category,
            img_url,
            availability,
            price,
            id

        } = this.props.pieceData

        this.state = {
            title,
            description,
            category,
            img_url,
            availability,
            price,
            id
        }

    }
    state = {
        editing: false
    }
    onUpdate = (newData) => {

        this.setState({...newData, editing: false })
       
    }

    onDelete = () => {
        this.props.onDoneEditing()
    }

    clickedEdit = () => {
        this.setState({editing: true})
        this.props.onEdit()
    }
    
    clickedDelete = () => {
        this.props.onDelete()
        this.deletePiece()
    }

    render () {
        const {
            title,
            description,
            category,
            img_url,
            availability,
            price,
            id

        } = this.state
        return (

        this.state.editing? <EditPiece onDelete = {this.onDelete} onUpdate = {this.onUpdate} pieceData = {this.props.pieceData}/> : <StyledPiece key = {id} >
            <h5>{title}</h5>
            <p>{description}</p>
            <img src={img_url}/>
            <strong>Availability: {availability}</strong>
            <br/>
            <strong>Price: {price}</strong>
            {this.state.editing? null: <button onClick = {this.clickedEdit}>Edit</button>}
        </StyledPiece>
        )
    }
}

export default Piece