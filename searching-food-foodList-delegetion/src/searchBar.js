import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <input
        type='text'
        onChange={this.props.onFilterFoods}
      />
    );
  }
}

export default SearchBar;
