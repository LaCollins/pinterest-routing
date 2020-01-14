import './PinForm.scss';
import React from 'react';
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinTitle: '',
    pinUrl: '',
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  urlChange = (e) => {
    e.preventDefault();
    this.setState({ pinUrl: e.target.value });
  }

  savePinEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinUrl,
      uid: authData.getUid(),
      boardId,
    };
    pinData.savePin(newPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((error) => console.error('err from save pin event', error));
  }

  render() {
    const { pinTitle, pinUrl } = this.state;

    return (
      <form className="PinForm">
        <div className="form-group">
          <label htmlFor="pin-title">Pin Title</label>
          <input
            type="text"
            className="form-control col-4 m-auto"
            id="pin-title"
            placeholder="Enter Pin Title"
            value={pinTitle}
            onChange={this.titleChange}
            >
            </input>
          <label htmlFor="pin-url">Pin Image Url</label>
          <input
            type="text"
            className="form-control col-4 m-auto"
            id="pin-url"
            placeholder="Enter Pin Image Url"
            value={pinUrl}
            onChange={this.urlChange}
            >
            </input>
        </div>
        <button className="btn btn-dark" onClick={this.savePinEvent}>Save Pin</button>
      </form>
    );
  }
}

export default PinForm;
