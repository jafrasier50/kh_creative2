import React, { Component } from "react";
import axios from "axios";
import Piece from "../../pieces_dashboard/components/Piece";
import { StyledPiecesView } from "../../pieces_dashboard/components/styled_components/StyledPiecesView";
import { StyledRenderedPieces } from "../../pieces_dashboard/components/styled_components/StyledRenderedPieces";

class PiecesView extends Component {
  constructor() {
    super();
    this.getPieces();
    this.state = {
      renderedPieces: []
    };
  }

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
      <Piece
        onDoneEditing={this.onDoneEditing}
        onEdit={this.onEdit}
        onDoneEditing={this.onDoneEditing}
        pieceData={info}
      />
    );
  };

  render() {
    return (
      <StyledPiecesView>
        <section className="card">
          <StyledRenderedPieces className="card-content">
            {this.state.renderedPieces}
          </StyledRenderedPieces>
        </section>
      </StyledPiecesView>
    );
  }
}

export default PiecesView;
