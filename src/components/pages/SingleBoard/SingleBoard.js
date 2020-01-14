import React from 'react';
import boardData from '../../../helpers/data/boardData';
import pinData from '../../../helpers/data/pinData';
import Pin from '../../shared/Pin/Pin';

import './SingleBoard.scss';

class SingleBoard extends React.Component {
  state = {
    board: {},
    pins: [],
  }

  getPinData = (boardId) => {
    pinData.getPinsByBoardId(boardId)
      .then((pins) => {
        this.setState({ pins });
      })
      .catch((error) => console.error('err from single board', error));
  }

  componentDidMount() {
    const { boardId } = this.props.match.params;

    boardData.getSingleBoard(boardId)
      .then((response) => {
        this.setState({ board: response.data });
        this.getPinData(boardId);
      })
      .catch((error) => console.error('err from single board', error));
  }

  deletePin = (pinId) => {
    const { boardId } = this.props.match.params;

    pinData.deletePin(pinId)
      .then(() => this.getPinData(boardId))
      .catch((error) => console.error('err from single board', error));
  }

  render() {
    const { board, pins } = this.state;

    return (
      <div className="SingleBoard">
        <h1>{board.name}</h1>
        <h2>{board.description}</h2>
        <div className="pins container d-flex flex-wrap justify-content-center mt-3">
          {pins.map((pin) => <Pin key={pin.id} pin={pin} deletePin={this.deletePin}/>)}
        </div>
      </div>
    );
  }
}

export default SingleBoard;
