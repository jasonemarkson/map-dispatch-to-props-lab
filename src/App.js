import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import { connect } from 'react-redux';
import Restaurants from './components/Restaurants';

export class App extends Component {
  mapDispatchToProps = dispatch => {
    return {
      addRestaurant: () => {
        dispatch(addRestaurant())
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

