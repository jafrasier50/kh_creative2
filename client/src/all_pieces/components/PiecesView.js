import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "../../spinner/spinner";
import Piece from "../../pieces_dashboard/components/Piece";
import { StyledPiecesView } from "../../pieces_dashboard/components/styled_components/StyledPiecesView";
import { StyledRenderedPieces } from "../../pieces_dashboard/components/styled_components/StyledRenderedPieces";

class PiecesView extends Component {
  constructor() {
    super();
    this.getPieces();
    this.state = {
      renderedPieces: [],
      loading: true
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
      this.setState({ renderedPieces: renderedPiecesArray, loading: false });
    }
  };

  renderPiece = info => {
    return (
      <Piece
        onDoneEditing={this.onDoneEditing}
        onEdit={this.onEdit}
        pieceData={info}
        key={info.id}
      />
    );
  };

  render() {
    return (
      <StyledPiecesView className="Styled-Pieces-View">
        {this.state.loading ? <Spinner /> : null}
        <section className="piece-container">
          <StyledRenderedPieces className="pieces">
            {this.state.renderedPieces}
          </StyledRenderedPieces>
        </section>
      </StyledPiecesView>
    );
  }
}

export default PiecesView;
