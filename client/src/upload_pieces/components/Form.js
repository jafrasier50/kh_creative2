import React, { Component } from 'react'

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

    formSubmit = (e) => {
        e.preventDefault()
    }
    render () {
        return (
            <div>
                <form>   
                   <input onChange={this.handleChange} name="title" placeholder="enter title" value={this.state.title}/>
                   <input onChange={this.handleChange} name="description" placeholder="enter description" value={this.state.description}/>
                   <input onChange={this.handleChange} name="category" placeholder="enter category" value={this.state.category}/>
                   <input onChange={this.handleChange} name="img_url" placeholder="enter img_url" value={this.state.img_url}/>
                   <input onChange={this.handleChange} name="availability" placeholder="enter availability" value={this.state.availability}/>
                   <input onChange={this.handleChange} name="price" placeholder="enter price" value={this.state.price}/>
                </form> 
            </div>
        )
    }
}

export default UploadPieceForm