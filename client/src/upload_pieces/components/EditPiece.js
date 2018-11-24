import React, { Component } from 'react'
import styled from 'styled-components'
import axios from "axios"

const StyledForm = styled.div`

    background-color: lightgray;
    padding: 15px;
    max-width: 200px;
    margin: 10px;
    img{
        max-width: 150px;
    }
`

class UploadPieceForm extends Component {  
    constructor(props) {
        super(props)
        let pieceData = this.props.pieceData
        this.state =  {
        
            title: pieceData.title,
            description: pieceData.description,
            category: pieceData.category,
            img_url: pieceData.img_url,
            availability: pieceData.availability,
            price: pieceData.price,
            uploading: false,
            errorUploading: false,
            uploaded: false,
            deleted: false
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        let changed = {}
        changed[e.target.name] = e.target.value
        this.setState(changed)
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
        
        let result = await axios.put(`api/piece/${this.props.pieceData.id}`,{
            title,
            description,
            category,
            img_url,
            availability,
            price
        } )
        if (result.data && result.data.updated) {
            this.props.onUpdate(result.data.updated)
            console.log ({...result.data.updated})
            this.setState({...result.data.updated})
        }

    }
    deletePiece = async e => {
        e.preventDefault()        
        let result = await axios.delete(`api/piece/${this.props.pieceData.id}`)
        if (result.data && result.data.removed) {
            this.props.onDelete()
            this.setState({deleted: true})
        }

        console.log(result)

    }
    render () {
        const {uploading,uploaded,errorUploading,title,description,category,availability,price,deleted, saved} = this.state
        return (!deleted ? 
            <div>
                {uploading ? <p>Uploading Image...</p>:
                <form onSubmit={this.formSubmit}>   
                   <input type="text" onChange={this.handleChange} name="title" placeholder="enter title" value={title}/>
                   <textarea onChange={this.handleChange} name="description" placeholder="enter description" value={description}/>
                   <input onChange={this.handleChange} name="category" placeholder="enter category" value={category}/>
                   <input onChange={this.handleChange} name="availability" placeholder="enter availability" value={availability}/>
                   <input onChange={this.handleChange} name="price" placeholder="enter price" value={price}/>
                   {uploaded?<p>image upload successful! Ready to submit when you are...</p>:<input onChange={this.uploadFile} type="file" id="file" placeholder="Upload an Image"/>}
                   {!errorUploading ? <input type="submit"/>:<p>Error Uploading Image. Try again.</p>}
                   <button onClick = {this.deletePiece}>Delete</button>

        </form>}
                
            </div> :null
        )
    }
}

export default UploadPieceForm