import React, { Component } from 'react'
import axios from "axios"
import styled from 'styled-components'

const StyledPiece = styled.div`

    background-color: lightgray;
    padding: 15px;
    max-width: 200px;
    margin: 10px;
    img{
        max-width: 150px;
    }





`

class UploadPieceForm extends Component {  
    constructor() {
        super()
        this.getPieces()
    }
    state = {
        title: "",
        description: "",
        category: "",
        img_url: "",
        availability: "",
        price: "",
        renderedPieces: []
    }

    handleChange = (e) => {
        e.preventDefault()
        let changed = {}
        changed[e.target.name] = e.target.value
        this.setState(changed)
    }

    getPieces = async () => {
        
        let result = await axios.get("api/pieces")
        let pieces = result.data.pieces


        if(pieces && pieces.length){
            let renderedPiecesArray = []
            pieces.forEach((piece) => {
                renderedPiecesArray.push(this.renderPiece(piece))
            
            } )

            this.setState({renderedPieces: renderedPiecesArray})
        }
    
    }
    
    renderPiece = (info) => {
        const {
            title,
            description,
            category,
            img_url,
            availability,
            price
        } = info

        return (<StyledPiece>
        <h5>{title}</h5>
        <p>{description}</p>
        <img src={img_url}/>
        <strong>Availability: {availability}</strong>
        <strong>Price: {price}</strong>

    </StyledPiece>)
    }

    uploadFile = async e => {

        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'frasier')

        const res = await fetch('https://api.cloudinary.com/v1_1/frasier/image/upload', {
          method: 'POST',
          body: data
        })
    
        const file = await res.json()
        console.log(file)
        this.setState({img_url: file.secure_url})
    }

    formSubmit = async e => {
        e.preventDefault()
      
        const {

            title,
            description,
            category,
            img_url,
            availability,
            price

        } = this.state
        
        let result = await axios.post("api/piece",{
            title,
            description,
            category,
            img_url,
            availability,
            price
        } )

        var newRenderedPieces = [...this.state.renderedPieces ]

        newRenderedPieces.push(this.renderPiece(result.data.created))
       
        this.setState({renderedPieces: newRenderedPieces })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.formSubmit}>   
                   <input type="text" onChange={this.handleChange} name="title" placeholder="enter title" value={this.state.title}/>
                   <textarea onChange={this.handleChange} name="description" placeholder="enter description" value={this.state.description}/>
                   <input onChange={this.handleChange} name="category" placeholder="enter category" value={this.state.category}/>
                   <input onChange={this.handleChange} name="availability" placeholder="enter availability" value={this.state.availability}/>
                   <input onChange={this.handleChange} name="price" placeholder="enter price" value={this.state.price}/>
                   <input onChange={this.uploadFile} type="file" id="file" placeholder="Upload an Image"/>
                   <input type="submit"/>
                </form> 
                {this.state.renderedPieces}
            </div>
        )
    }
}

export default UploadPieceForm