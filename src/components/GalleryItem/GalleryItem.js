import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    click: false,
    likes: [],
  };

  //   displayText = () => {
  //     if (!this.state.click) {
  //       this.setState(
  //         {
  //           click: true,
  //         },
  //         () => {
  //           console.log(this.state.click);
  //         }
  //       );
  //     } else {
  //       this.setState(
  //         {
  //           click: false,
  //         },
  //         () => {
  //           console.log(this.state.click);
  //         }
  //       );
  //     }
  //   };

  handleClick(e) {
    e.preventDefault();
    this.setState({
      on: !this.state.on,
    });
  }
  render() {
    let status;
    if (this.state.on) {
      status = this.props.imageList.map((image) => (
        <div key={image.id}>
          <img key={image.id} src={image.path} alt={image.description} />
          <br></br>
          <button onClick={this.showLikes}>LIKE IT!</button>
          <p></p>
        </div>
      ));
    } else {
      status = this.props.imageList.map((image) => (
        <div key={image.id}>
          <p key={image.id}>{image.description}</p>
        </div>
      ));
    }
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Toggle</button>
        {status}
      </div>
    );
  }
}

//   render() {
//     let el = this.props.imageList.map((image) => (
//       <div key={image.id}>
//         <img key={image.id} src={image.path} alt={image.description} />
//         <br></br>
//         <button onClick={this.showLikes}>LIKE IT!</button>
//         <p></p>
//       </div>
//     ));
//     if (this.state.click === true) {
//       el = this.props.imageList.map((image) => (
//         <div key={image.id}>
//           <p key={image.id}>{image.description}</p>
//         </div>
//       ));
//     }
//     return <div onClick={this.displayText}>HERE IS{el}</div>;
//   }
// }

export default GalleryItem;
