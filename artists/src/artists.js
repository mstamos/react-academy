import React from 'react';
import Artist from './artist';
import Album from './album';

class Artists extends React.Component {
  constructor() {
    super();
    this.state= {
      artists: [],
      albums: []
    };

    this.displayArtists = this.displayArtists.bind(this);
    this.removeArtist = this.removeArtist.bind(this);
    this.displayAlbums = this.displayAlbums.bind(this);
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

  displayAlbums() {
    return (
      <ul>
        {this.state.albums.map((album, index) => {
          return (
            <Album key={index} album={album}/>
          );
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
        return fetch('http://localhost:3001/artists/' + artists[0].id + '/albums');
      })
      .then(res => res.json())
      .then(albums => {
        this.setState({
          albums
        });
      })
  }

  render() {
    return (
      <div>
        Artists
        {this.displayArtists()}
        <p></p>
        Show Albums of Iron Maiden
        {this.displayAlbums()}
      </div>
    );
  }
}

export default Artists;
