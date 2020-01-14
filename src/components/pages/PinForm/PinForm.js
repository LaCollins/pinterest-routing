import './PinForm.scss';
import React from 'react';
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinTitle: '',
    pinUrl: '',
  }

  componentDidMount() {
    const { pinId } = this.props.match.params;
    if (pinId) {
      pinData.getSinglePin(pinId)
        .then((request) => {
          const pin = request.data;
          this.setState({ pinTitle: pin.title });
          this.setState({ pinUrl: pin.imageUrl });
        })
        .catch((error) => console.error('error from pin', error));
    }
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

  editPinEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const { pinId } = this.props.match.params;
    const updatedPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinUrl,
      uid: authData.getUid(),
      boardId,
    };
    pinData.updatePin(pinId, updatedPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((error) => console.error('err from edit pin event', error));
  }

  render() {
    const { pinTitle, pinUrl } = this.state;
    const { pinId } = this.props.match.params;

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
        {
          pinId
            ? (<button className="btn btn-dark" onClick={this.editPinEvent}>Edit Pin</button>)
            : (<button className="btn btn-dark" onClick={this.savePinEvent}>Save Pin</button>)
        }
      </form>
    );
  }
}

export default PinForm;
