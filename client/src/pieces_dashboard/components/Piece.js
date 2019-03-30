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
        cancelEdit={this.props.cancelEdit}
        onDelete={this.onDelete}
        onUpdate={this.onUpdate}
        pieceData={this.props.pieceData}
      />
    ) : (
      <StyledPiece key={id} className="piece">
        <div className="peice__title-and-image">
          <div className="piece-title">
            <h2>{title}</h2>
          </div>
          <div className="piece-image">
            <img src={img_url} />
          </div>
        </div>
        <div className="piece-info">
          <div className="piece-info-content">
            <p>{description}</p>
            <div className="pieceStats">
              <div>Availability: {availability}</div>
              <div>Price: {price}</div>
              {this.state.editing || !this.props.loggedIn ? null : (
                <button className="editButton" onClick={this.clickedEdit}>
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </StyledPiece>
    );
  }
}

export default Piece;
