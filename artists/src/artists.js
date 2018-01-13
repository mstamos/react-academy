import React from 'react';
import Artist from './artist';

class Artists extends React.Component {
  constructor() {
    super();
    this.state= {
      artists: []
    };

    this.displayArtists = this.displayArtists.bind(this);
    this.removeArtist = this.removeArtist.bind(this);
  }

  removeArtist(id) {
    this.setState({
      artists: this.state.artists.filter(artist =>  artist.id !== id)
    });
  }

  displayArtists() {
    return (
      <ul>
        {this.state.artists.map((artist, index) => {
          return <Artist key={index} artist={artist} removeArtist={this.removeArtist}/>
        })}
      </ul>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3001/artists')
      .then(res => res.json())
      .then(artists => {
        this.setState({
          artists
        });
      });
  }

  render() {
    return (
      <div>
        Artists
        {this.displayArtists()}
      </div>
    );
  }
}

export default Artists;
