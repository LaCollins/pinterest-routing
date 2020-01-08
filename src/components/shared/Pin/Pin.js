import React from 'react';
import './Pin.scss';

import pinShape from '../../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-4 mb-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{pin.title}</h5>
            <img className="card-img" src={pin.imageUrl} alt={pin.title} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
