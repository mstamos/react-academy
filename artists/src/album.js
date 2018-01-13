import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <li>{this.props.album.name}</li>
    )
  }
}

export default Album;
