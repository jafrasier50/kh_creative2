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
        renderedPieces: [],
        uploading: false,
        errorUploading: false,
        uploaded: false
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
            price,
            id
        } = info

        return (<StyledPiece key = {id} >
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
        this.setState({
            uploading: true,
            errorUploading: false,
            uploaded: false
        })

        const res = await fetch('https://api.cloudinary.com/v1_1/frasier/image/upload', {
          method: 'POST',
          body: data
        })
    
        const file = await res.json()
        if (file && file.secure_url) {
            this.setState({img_url: file.secure_url, uploading: false, errorUploading: false, uploaded: true})

        }
        else{
            this.setState({uploading: false, errorUploading: true, uploaded: false})
        }
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
        const {uploading,uploaded,errorUploading} = this.state
        return (
            <div>
                {uploading ? <p>Uploading Image...</p>:
                <form onSubmit={this.formSubmit}>   
                   <input type="text" onChange={this.handleChange} name="title" placeholder="enter title" value={this.state.title}/>
                   <textarea onChange={this.handleChange} name="description" placeholder="enter description" value={this.state.description}/>
                   <input onChange={this.handleChange} name="category" placeholder="enter category" value={this.state.category}/>
                   <input onChange={this.handleChange} name="availability" placeholder="enter availability" value={this.state.availability}/>
                   <input onChange={this.handleChange} name="price" placeholder="enter price" value={this.state.price}/>
                   {uploaded?<p>Upload Successful!</p>:<input onChange={this.uploadFile} type="file" id="file" placeholder="Upload an Image"/>}
                   {!errorUploading ? <input type="submit"/>:<p>Error Uploading Image. Try again.</p>}
        </form>}
                {this.state.renderedPieces}
            </div>
        )
    }
}

export default UploadPieceForm