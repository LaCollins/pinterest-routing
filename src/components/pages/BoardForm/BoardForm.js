import React from 'react';

import './BoardForm.scss';
import authData from '../../../helpers/data/authData';
import boardData from '../../../helpers/data/boardData';

class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
  }

  componentDidMount() {
    const { boardId } = this.props.match.params;
    if (boardId) {
      boardData.getSingleBoard(boardId)
        .then((response) => {
          this.setState({ boardName: response.data.name, boardDescription: response.data.description });
        })
        .catch((error) => console.error('err from board form', error));
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  }

  saveBoardEvent = (e) => {
    e.preventDefault();
    const newBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    };
    boardData.saveBoard(newBoard)
      .then(() => this.props.history.push('/'))
      .catch((error) => console.error('err from save board', error));
  }

  editBoardEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const updatedBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    };
    boardData.updateBoard(boardId, updatedBoard)
      .then(() => this.props.history.push('/'))
      .catch((error) => console.error('err from edit board', error));
  }

  render() {
    const { boardName, boardDescription } = this.state;
    const { boardId } = this.props.match.params;
    return (
      <form className="BoardForm">
        <div className="form-group">
          <label htmlFor="board-name">Board Name</label>
          <input
            type="text"
            className="form-control col-4 m-auto"
            id="board-name"
            placeholder="Enter board name"
            value={boardName}
            onChange={this.nameChange}
            >
          </input>
          <label htmlFor="board-description">Board Description</label>
          <input
            type="text"
            className="form-control col-4 m-auto"
            id="board-description"
            placeholder="Enter board description"
            value={boardDescription}
            onChange={this.descriptionChange}
            >
            </input>
        </div>
        {
          boardId
            ? (<button className="btn btn-dark" onClick={this.editBoardEvent}>Edit Board</button>)
            : (<button className="btn btn-dark" onClick={this.saveBoardEvent}>Save Board</button>)
        }
      </form>
    );
  }
}

export default BoardForm;
