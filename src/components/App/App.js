import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import AppBar from '@material-ui/core/AppBar';

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
        <AppBar color="primary" position="static">
          <h1>Smash the like button for your FAVORITE pic!</h1>
        </AppBar>
        <div className="list">
          <GalleryList
            getLikes={this.getLikes}
            getGalleryData={this.getGalleryData}
            imageList={this.state.imageList}
          />
        </div>
      </div>
    );
  }
}

export default App;
