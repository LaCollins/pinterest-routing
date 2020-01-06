import React from 'react';
import {Link} from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    const boardId = '-LwGijHs0k_r_KOZIaih';
    return (
      <div className="Home">
        <h1>HOME</h1>
        <Link className="btn btn-dark" to="/board/new">Create New Board</Link>
        <Link className="btn btn-info" to={`/board/${boardId}`}>Single Board Page</Link>
      </div>
    );
  }
}

export default Home;
