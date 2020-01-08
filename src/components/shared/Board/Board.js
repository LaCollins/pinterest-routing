import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    deleteBoard: PropTypes.func,
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { deleteBoard, board } = this.props;
    deleteBoard(board.id);
  }

  render() {
    const { board } = this.props;

    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-end">
              <button className="btn btn-danger m-0 close" onClick={this.deleteBoardEvent}>X</button>
            </div>
            <h5 className="card-title m-0">{board.name}</h5>
            <p className="card-text">{board.description}</p>
          </div>
            <div className="card-footer">
              <Link className="btn btn-dark" to={`/board/${board.id}`}>View Board</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Board;
