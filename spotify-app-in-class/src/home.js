import React from 'react';
import Search from './search';
import Artists from './artists';

class Home extends React.Component {
  render() {
   return (
     <div>
       <Search
        onInputChange={this.props.onInputChange}
        onSearch={this.props.onSearch}
       />
       <Artists
        artists={this.props.artists}
        onSelectedHeart={this.props.onSelectedHeart}
       />
     </div>
   )
  }
}

export default Home;
