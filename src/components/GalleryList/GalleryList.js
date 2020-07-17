import React, { Component } from 'react';
import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    return (
      <div>
        <h2>Images</h2>
        <GalleryItem imageList={this.props.imageList} />
      </div>
    );
  }
}

export default GalleryList;
