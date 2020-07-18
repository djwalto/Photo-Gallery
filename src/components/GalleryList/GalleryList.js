import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const htmlArray = this.props.imageList.map((item, index) => {
      return <GalleryItem item={item} />;
    });
    return (
      <div>
        <ul>{htmlArray}</ul>
      </div>
    );
  }
}

export default GalleryList;
