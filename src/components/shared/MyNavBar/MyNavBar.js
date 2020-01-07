import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="MyNavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Pinterest</a>

            <div className="my-2 mt-lg-0">
              {authed && (<button className="nav-links btn btn-dark" onClick={this.logMeOut}>Logout</button>)}
            </div>
        </nav>
      </div>
    );
  }
}

export default MyNavBar;
