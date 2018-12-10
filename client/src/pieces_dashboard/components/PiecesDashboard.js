import React, { Component } from "react";
import axios from "axios";
import Piece from "./Piece";
import Cookies from "universal-cookie";
import { StyledPieceForm } from "./styled_components/StyledPieceForm";
import { StyledRenderedPieces } from "../../pieces_dashboard/components/styled_components/StyledRenderedPieces";

const cookies = new Cookies();

class PiecesDashboard extends Component {
  constructor() {
    super();
    this.getPieces();
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
  };

  onEdit = () => {
    this.setState({
      editing: true
    });
  };

  onDoneEditing = () => {
    this.setState({
      editing: false
    });

    this.getPieces();
    console.log("gettingPieces");
  };

  handleChange = e => {
    e.preventDefault();
    let changed = {};
    changed[e.target.name] = e.target.value;
    this.setState(changed);
  };

  getPieces = async () => {
    let result = await axios.get("api/pieces");
    let pieces = result.data.pieces;

    if (pieces && pieces.length) {
      let renderedPiecesArray = [];
      pieces.forEach(piece => {
        renderedPiecesArray.push(this.renderPiece(piece));
      });
      console.log("got Pieces!");
      this.setState({ renderedPieces: renderedPiecesArray });
    }
  };

  renderPiece = info => {
    return (
      <Piece
        loggedIn={this.props.loggedIn}
        onDoneEditing={this.onDoneEditing}
        onEdit={this.onEdit}
        onDoneEditing={this.onDoneEditing}
        pieceData={info}
      />
    );
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "frasier");
    this.setState({
      uploading: true,
      errorUploading: false,
      uploaded: false
    });

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/frasier/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    if (file && file.secure_url) {
      this.setState({
        img_url: file.secure_url,
        uploading: false,
        errorUploading: false,
        uploaded: true
      });
    } else {
      this.setState({
        uploading: false,
        errorUploading: true,
        uploaded: false
      });
    }
  };

  formSubmit = async e => {
    e.preventDefault();

    let piecesPassCookie = cookies.get("pieces_secret");

    if (piecesPassCookie) {
      const {
        title,
        description,
        category,
        img_url,
        availability,
        price
      } = this.state;

      let result = await axios({
        method: "POST",
        url: "api/piece",
        data: {
          title,
          description,
          category,
          img_url,
          availability,
          price
        },
        headers: {
          Authorization: "Basic " + piecesPassCookie
        }
      });

      var newRenderedPieces = [...this.state.renderedPieces];

      newRenderedPieces.push(this.renderPiece(result.data.created));

      this.setState({ renderedPieces: newRenderedPieces });
    }
  };

  render() {
    const {
      uploading,
      uploaded,
      errorUploading,
      editing,
      title,
      description,
      category,
      availability,
      price
    } = this.state;
    return (
      <div>
        {uploading ? <p>Uploading Image...</p> : null}
        {!editing ? (
          <StyledPieceForm>
            <form onSubmit={this.formSubmit}>
              <h4>Submit a Piece</h4>
              <input
                type="text"
                onChange={this.handleChange}
                name="title"
                placeholder="enter title"
                value={title}
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="description"
                placeholder="enter description"
                value={description}
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="category"
                placeholder="enter category"
                value={category}
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="availability"
                placeholder="enter availability"
                value={availability}
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="price"
                placeholder="enter price"
                value={price}
              />
              {uploaded ? (
                <p>image upload successful! Ready to submit when you are...</p>
              ) : (
                <input
                  onChange={this.uploadFile}
                  type="file"
                  id="file"
                  placeholder="Upload an Image"
                />
              )}
              {!errorUploading ? (
                <input type="submit" />
              ) : (
                <p>Error Uploading Image. Try again.</p>
              )}
            </form>
          </StyledPieceForm>
        ) : null}
        <StyledRenderedPieces>{this.state.renderedPieces}</StyledRenderedPieces>
      </div>
    );
  }
}

export default PiecesDashboard;
