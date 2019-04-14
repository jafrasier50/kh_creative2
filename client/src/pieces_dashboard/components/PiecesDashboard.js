import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { StyledPieceForm } from "./styled_components/StyledPieceForm";
import { StyledDashboard } from "../components/styled_components/StyledDashboard";
import DashboardPiece from "../components/DashboardPiece";

const cookies = new Cookies();
class PiecesDashboard extends Component {
  _isMounted = false;
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

  cancelEdit = () => {
    this.setState({
      editing: false
    });
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
      this.setState({ renderedPieces: renderedPiecesArray });
    }
  };

  renderPiece = info => {
    return (
      <DashboardPiece
        loggedIn={this.props.loggedIn}
        onEdit={this.onEdit}
        cancelEdit={this.cancelEdit}
        onDoneEditing={this.onDoneEditing}
        pieceData={info}
        key={info.id}
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

  resetForm = newRenderedPieces => {
    this.setState({
      title: "",
      description: "",
      category: "",
      img_url: "",
      availability: "",
      price: "",
      // renderedPieces: [],
      uploading: false,
      errorUploading: false,
      uploaded: false,
      editing: false,
      renderedPieces: newRenderedPieces
    });
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
      this.resetForm(newRenderedPieces);

      // this.setState({
      //   renderedPieces: {newRenderedPieces}
      // });
    }
  };

  render() {
    const {
      uploading,
      uploaded,
      errorUploading,
      title,
      description,
      category,
      availability,
      price
    } = this.state;
    return (
      <StyledDashboard>
        <div className="dashboard-pieces__wrapper">
          {uploading ? <p>Uploading Image...</p> : null}
          <StyledPieceForm className="piece-form">
            <form onSubmit={this.formSubmit}>
              <h4>Submit a Piece</h4>
              <input
                type="text"
                onChange={this.handleChange}
                name="title"
                placeholder=" Enter title"
                value={title}
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="description"
                placeholder=" Enter description"
                value={description}
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="category"
                placeholder=" Enter category"
                value={category}
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="availability"
                placeholder=" enter availability"
                value={availability}
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="price"
                placeholder=" Enter price"
                value={price}
              />
              <div className="form-actions">
                {uploaded ? (
                  <p>
                    image upload successful! Ready to submit when you are...
                  </p>
                ) : (
                  <React.Fragment>
                    <div className="custom-upload__button">
                      <label htmlFor="file">Upload Art</label>
                      <input
                        onChange={this.uploadFile}
                        type="file"
                        id="file"
                        placeholder="Upload an Image"
                      />
                    </div>
                  </React.Fragment>
                )}
                {this.state.img_url && (
                  <img
                    className="upload-preview"
                    src={this.state.img_url}
                    alt=" Upload Preview"
                  />
                )}
                <br />
                {!errorUploading ? (
                  <input type="submit" />
                ) : (
                  <p>Error Uploading Image. Try again.</p>
                )}
              </div>
            </form>
          </StyledPieceForm>
          <div className="dashBoardPieces">{this.state.renderedPieces}</div>
        </div>
      </StyledDashboard>
    );
  }
}

export default PiecesDashboard;
