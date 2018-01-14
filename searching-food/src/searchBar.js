import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.onInputChange}
        />
      </div>
    )
  }
}

export default SearchBar;
