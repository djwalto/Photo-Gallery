import React, { Component } from 'react';
import axios from 'axios';
import App from '../App/App';
import './GalleryItem.css';
import swal from 'sweetalert';

class GalleryItem extends Component {
  state = {
    toggle: false,
  };

  onToggleClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

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

  handleLike = (id) => (event) => {
    console.log('hi handle like', id);
    swal({
      title: 'THANKS!',
      text: 'You smashed my like button!',
      icon: 'success',
      button: 'Ahh Yeeeeaaah!',
    });

    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: {
        likes: this.props.item.likes,
      },
    })
      .then((response) => {
        console.log('HANDLE LIKE RESPONSE', response);
        console.log(this.props.item.description);
        this.setState({
          ...this.props.item,
          likes: Number((this.props.item.likes += 1)),
        });
        this.getGalleryData();
      })
      .catch((err) => {
        console.log('err: ', err);
        alert('Stuff broke!!!');
      });
    this.getGalleryData();
  };

  render() {
    let elementRender = <img src={this.props.item.path} />;
    if (this.state.toggle === true) {
      elementRender = <p>{this.props.item.description}</p>;
    }

    return (
      <div className="container">
        <div className="likes">
          <p>{this.props.item.likes} likes so far!</p>
        </div>
        <p className="item" onClick={this.onToggleClick}>
          {elementRender}
        </p>
        <button
          className="button"
          onClick={this.handleLike(this.props.item.id)}
        >
          Like Me!
        </button>
      </div>
    );
  }
}

export default GalleryItem;
