import React from 'react';

class Artist extends React.Component {
  render() {
    const artist = this.props.artist;
    return (
      <li>
        {artist.name}
        <button onClick={() => this.props.removeArtist(artist.id)}>Remove</button>
      </li>
    );
  }
}

export default Artist;
