import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.displayFoods = this.displayFoods.bind(this);
  }

  displayFoods() {
    return this.props.foods.map((food, index) => {
      return <li key={index}>{food.name}</li>;
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.displayFoods()}
        </ul>
      </div>
    )
  }
}

export default App;
