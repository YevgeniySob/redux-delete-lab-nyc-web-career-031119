import React, { Component } from 'react';

class Band extends Component {
  render() {
  const {id, name } = this.props.band;
    return(
      <li>
        {name}
        <button onClick={() => this.props.deleteBand(id)}>DELETE</button>
      </li>
    );
  }
}

export default Band;
