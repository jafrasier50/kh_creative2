import React, { Component } from "react";
import EditPiece from "./EditPiece";
import { StyledDashboardPiece } from "./styled_components/StyledDashboardPiece";

class DashboardPiece extends Component {
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
      // category,
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
      <StyledDashboardPiece key={id}>
        <div className="styledPieceDiv">
          <div className="ImgTitle-img">
            <div className="pieceInfo">
              <h2>{title}</h2>
            </div>
            <div className="pieceImage">
              <img src={img_url} alt="" />
            </div>
          </div>
          <div className="pieceStats">
            <p>{description}</p>
            <strong>Availability: {availability}</strong>
            <br />
            <strong>Price: {price}</strong>
            <br />
            {this.state.editing || !this.props.loggedIn ? null : (
              <button className="editButton" onClick={this.clickedEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </StyledDashboardPiece>
    );
  }
}

export default DashboardPiece;
