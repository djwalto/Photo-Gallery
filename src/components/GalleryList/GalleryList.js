import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import { Grid, Paper, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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
