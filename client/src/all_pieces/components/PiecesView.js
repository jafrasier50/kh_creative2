import React, { Component } from 'react'
import axios from 'axios'
import Piece from '../../pieces_dashboard/components/Piece'

class PiecesView extends Component {

  constructor() {
    super()
    this.getPieces()
    this.state = {
      renderedPieces: []
    }
  }

  getPieces = async () => {
        
    let result = await axios.get("api/pieces")
    let pieces = result.data.pieces


    if(pieces && pieces.length){
        let renderedPiecesArray = []
        pieces.forEach((piece) => {
            renderedPiecesArray.push(this.renderPiece(piece))
        
        } )
        console.log("got Pieces!")
        this.setState({renderedPieces: renderedPiecesArray})
    }
    
  }
  
  renderPiece = (info) => {
    return <Piece onDoneEditing = { this.onDoneEditing } onEdit = { this.onEdit } onDoneEditing = { this.onDoneEditing } pieceData = {info}/>
  
  }

  render () {

    return (
      <div>
        {this.state.renderedPieces}
      </div>
    )
  }
}

export default PiecesView