import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onAdd(event) {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  onRemove(event) {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Counter: {this.state.counter}</Text>
        <TouchableOpacity style={styles.button} onPress={this.onAdd}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onRemove}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});
