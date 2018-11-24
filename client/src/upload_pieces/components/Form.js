import React, { Component } from 'react'
import axios from "axios"
import Piece from "./Piece"

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
        uploaded: false,
        editing: false
    }

    onEdit = () => {
        this.setState({
            editing: true
        })
    }

    onDoneEditing = () => {
    
        this.setState({
            editing: false
        })
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
        return <Piece onDoneEditing = { this.onDoneEditing } onEdit = { this.onEdit } onDoneEditing = { this.onDoneEditing } pieceData = {info}/>
    
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
        const {uploading,uploaded,errorUploading,editing,title,description,category,availability,price} = this.state
        return (
            <div>
                {uploading ? <p>Uploading Image...</p>: null}
                {!editing? <form onSubmit={this.formSubmit}>   
                   <input type="text" onChange={this.handleChange} name="title" placeholder="enter title" value={title}/>
                   <textarea onChange={this.handleChange} name="description" placeholder="enter description" value={description}/>
                   <input onChange={this.handleChange} name="category" placeholder="enter category" value={category}/>
                   <input onChange={this.handleChange} name="availability" placeholder="enter availability" value={availability}/>
                   <input onChange={this.handleChange} name="price" placeholder="enter price" value={price}/>
                   {uploaded?<p>image upload successful! Ready to submit when you are...</p>:<input onChange={this.uploadFile} type="file" id="file" placeholder="Upload an Image"/>}
                   {!errorUploading ? <input type="submit"/>:<p>Error Uploading Image. Try again.</p>}
                </form> : null}
                {this.state.renderedPieces}
            </div>
        )
    }
}

export default UploadPieceForm