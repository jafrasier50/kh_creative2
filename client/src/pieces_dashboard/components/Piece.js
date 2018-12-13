import React, { Component } from "react";
import styled from "styled-components";
import EditPiece from "./EditPiece";
import { StyledPiece } from "./styled_components/StyledPiece";
import { checkAuth } from "../../auth/checkAuth";

class Piece extends Component {
  constructor(props) {
    super(props);
    const {
      title,
      description,
      category,
      img_url,
      availability,
      price,
      id
    } = this.props.pieceData;

    this.state = {
      title,
      description,
      category,
      img_url,
      availability,
      price,
      id
    };
  }
  state = {
    editing: false
  };
  onUpdate = newData => {
    this.setState({ ...newData, editing: false });
    this.props.onDoneEditing();
  };

  onDelete = () => {
    this.props.onDoneEditing();
  };

  clickedEdit = () => {
    this.setState({ editing: true });
    this.props.onEdit();
  };

  clickedDelete = () => {
    this.props.onDelete();
    this.deletePiece();
  };

  render() {
    const {
      title,
      description,
      category,
      img_url,
      availability,
      price,
      id
    } = this.state;
    return this.state.editing ? (
      <EditPiece
        onDelete={this.onDelete}
        onUpdate={this.onUpdate}
        pieceData={this.props.pieceData}
      />
    ) : (
      <StyledPiece key={id}>
        <div className="pieceInfo">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div classname="pieceImage">
          <img src={img_url} />
        </div>
        <div className="pieceStats">
          <strong>Availability: {availability}</strong>
          <br />
          <strong>Price: {price}</strong>
        </div>
        {this.state.editing || !this.props.loggedIn ? null : (
          <button className="editButton" onClick={this.clickedEdit}>
            Edit
          </button>
        )}
      </StyledPiece>
    );
  }
}

export default Piece;
