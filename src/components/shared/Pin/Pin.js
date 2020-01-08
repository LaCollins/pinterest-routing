import React from 'react';
import './Pin.scss';
import PropTypes from 'prop-types';

import pinShape from '../../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    deletePin: PropTypes.func,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { deletePin, pin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-4 mb-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-end">
              <button className="btn btn-danger m-0 close" onClick={this.deletePinEvent}>X</button>
            </div>
            <h5 className="card-title">{pin.title}</h5>
            <img className="card-img" src={pin.imageUrl} alt={pin.title} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
