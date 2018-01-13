import React from 'react';

class Artists extends React.Component {
  constructor() {
    super();
    this.state= {
      artists: []
    };

    this.displayArtists = this.displayArtists.bind(this);
  }

  displayArtists() {
    return (
      <ul>
        {this.state.artists.map((artist, index) => {
          return <li key={index}>
            {artist.name}
            <button>Remove</button>
           </li>
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
    )

  }
}

export default Artists;
