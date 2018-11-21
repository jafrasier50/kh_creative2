import React, { Component } from 'react'
import axios from "axios"

class UploadPieceForm extends Component {  
    constructor() {
        super()
    }
    state = {
        title: "",
        description: "",
        category: "",
        img_url: "",
        availability: "",
        price: ""
    }

    handleChange = (e) => {
        e.preventDefault()
        var changed = {}
        changed[e.target.name] = e.target.value
        this.setState(changed)
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
        console.log("string",this.state)
        
        var result = await axios.post("api/piece",this.state)
        console.log(result)
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
            </div>
        )
    }
}

export default UploadPieceForm