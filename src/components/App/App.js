import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {
  state = {
    imageList: [],
  };

  componentDidMount() {
    console.log('READY');
    this.getGalleryData();
  }

  getGalleryData() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        // update state
        console.log('response', response.data);
        this.setState({
          imageList: response.data,
        });
      })
      .catch((err) => {
        alert('There was a problem.');
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList imageList={this.state.imageList} />
      </div>
    );
  }
}

export default App;
