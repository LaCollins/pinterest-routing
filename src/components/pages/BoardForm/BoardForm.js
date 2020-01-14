import React from 'react';

import './BoardForm.scss';

class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  render() {
    const { boardName } = this.state;
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
        </div>
        <button className="btn btn-dark">Save Board</button>
      </form>
    );
  }
}

export default BoardForm;
