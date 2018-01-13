import React from 'react';

class Artists extends React.Component {
  constructor() {
    super();
    this.state= {
      artists: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/artists')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        Artists
      </div>
    )

  }
}

export default Artists;
