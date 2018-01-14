import React from 'react';

class FoodList extends React.Component {
  constructor() {
    super();
    this.displayFoods = this.displayFoods.bind(this);
  }

  displayFoods() {
    return this.props.foods.map((food, index) => {
      return <li key={index}>{food.name}</li>
    });
  }

  render() {
    return (
      <ul>
        {this.displayFoods()}
      </ul>
    )
  }
}

export default FoodList;
