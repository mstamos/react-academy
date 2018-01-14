import React from 'react';
import FoodList from './foodList';
import SearchBar from './searchBar';

class App extends React.Component {
  constructor(props) {
    super();

    this.state ={
      foods: props.foods
    };

    this.filterFoods = this.filterFoods.bind(this);
  }

  filterFoods(event) {
    const value = event.target.value;

    const filteredFoods = this.props.foods.filter(food => {
      return food.name.includes(value);
    });

    this.setState({
      foods: filteredFoods
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          onInputChange={this.filterFoods}
        />
        <FoodList
          foods={this.state.foods}
        />
      </div>
    )
  }
}

export default App;
