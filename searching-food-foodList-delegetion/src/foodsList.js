import React from 'react';

class FoodsList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.foods
            .filter(food => food.name.includes(this.props.searchText))
            .map((food, index) => <li key={index}>{food.name}</li>)
        }
      </ul>
    );
  }
}
export default FoodsList;
