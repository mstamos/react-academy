import React from 'react';
import SearchBar from './searchBar';
import FoodsList from './foodsList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          onFilterFoods={this.onInputChange}
        />

        <FoodsList
          searchText={this.state.searchText}
          foods={this.props.foods}
        />
      </div>
    )
  }
}

export default App;
