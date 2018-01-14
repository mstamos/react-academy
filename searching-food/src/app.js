import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();

    this.state ={
      foods: props.foods
    };

    this.displayFoods = this.displayFoods.bind(this);
    this.filterFoods = this.filterFoods.bind(this);
  }

  displayFoods() {
    return this.state.foods.map((food, index) => {
      return <li key={index}>{food.name}</li>;
    })
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
        <input
          type='text'
          placeholder='Search for Food'
          onChange={this.filterFoods}
        />
        <ul>
          {this.displayFoods()}
        </ul>
      </div>
    )
  }
}

export default App;
