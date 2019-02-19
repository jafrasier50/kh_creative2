import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookies from "universal-cookie";
import { StyledEditPieceForm } from "./styled_components/StyledEditPieceForm";
const cookies = new Cookies();

const StyledForm = styled.div`
  background-color: lightgray;
  padding: 15px;
  max-width: 200px;
  margin: 10px;
  img {
    max-width: 150px;
  }
`;

class UploadPieceForm extends Component {
  constructor(props) {
    super(props);
    let pieceData = this.props.pieceData;
    this.state = {
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
    };
  }

  handleChange = e => {
    e.preventDefault();
    let changed = {};
    changed[e.target.name] = e.target.value;
    this.setState(changed);
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
        url: `api/piece/${this.props.pieceData.id}`,
        method: "PUT",
        data: {
          title,
          description,
          category,
          img_url,
          availability,
          price
        },
        headers: { Authorization: "Basic " + piecesPassCookie }
      });

      if (result.data && result.data.updated) {
        this.props.onUpdate(result.data.updated);
        console.log({ ...result.data.updated });
        this.setState({ ...result.data.updated });
      }
    }
  };
  deletePiece = async e => {
    e.preventDefault();
    let piecesPassCookie = cookies.get("pieces_secret");
    if (piecesPassCookie) {
      let result = await axios({
        method: "DELETE",
        url: `api/piece/${this.props.pieceData.id}`,
        headers: { Authorization: "Basic " + piecesPassCookie }
      });
      if (result.data && result.data.removed) {
        this.props.onDelete();
        this.setState({ deleted: true });
      }

      console.log(result);
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
      price,
      deleted,
      saved
    } = this.state;
    return !deleted ? (
      <div>
        {uploading ? (
          <p>Uploading Image...</p>
        ) : (
          <StyledEditPieceForm>
            <img
              style={{ width: "50%" }}
              src={this.props.pieceData.img_url}
              alt=""
            />

            <form onSubmit={this.formSubmit}>
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
              <br />
              <div>
                {!errorUploading ? (
                  <input type="submit" />
                ) : (
                  <p>Error Uploading Image. Try again.</p>
                )}
                <button onClick={this.props.cancelEdit}>Cancel</button>
                <button onClick={this.deletePiece}>Delete</button>
              </div>
              <br />
            </form>
          </StyledEditPieceForm>
        )}
      </div>
    ) : null;
  }
}

export default UploadPieceForm;
