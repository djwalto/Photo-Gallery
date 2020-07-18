import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';

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
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              <h1>My Life</h1>
            </TypoGraphy>
          </Toolbar>
        </AppBar>
        <br />
        <GalleryList
          getGalleryData={this.getGalleryData}
          imageList={this.state.imageList}
        />
      </div>
    );
  }
}

export default App;
