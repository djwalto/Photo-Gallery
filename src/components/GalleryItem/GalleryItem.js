import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <div>
        {this.props.imageList.map((image) => (
          <div key={image.id}>
            {image.description}
            <img src={image.path} />
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryItem;
