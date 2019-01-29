/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import queryString from 'query-string';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import { loadState } from '../../tools/localStorage';
// import { Carousel } from 'react-responsive-carousel';

const styles = {
  root: {
    marginTop: 90,
  },
  avatar: {
    marginLeft: 20,
    marginRight: 20,
    width: 60,
    height: 60,
    boxShadow: '0px 5px 7px 5px rgba(0, 0, 255, 0.10)',
  },
  awesome: {
    marginLeft: 10,
    boxShadow: '0px 5px 7px 5px rgba(0, 0, 255, 0.10)',
  },
  grid: {
    marginTop: 20,
    marginLeft: 10,
  },
};

function Favorites(props) {
  const { classes } = props;
  const [truck, setTruck] = useState([]);
  const values = queryString.parse(props.location.search);
  // Load trucks from cache
  useEffect(() => {
    // Load trucks from Session Storage if available
    const trucksFromMemory = loadState();
    // eslint-disable-next-line radix
    const findTruck = trucksFromMemory.find(element => element.id === parseInt(values.id));
    setTruck(findTruck);
  }, []);
  console.log(truck);
  const handleDeleteFavorite = () => {
    console.log('delete button clicked');
  };

  const handleViewFavorite = () => {
    console.log('view button clicked');
  };

  useEffect(() => {
    // Load trucks from Session Storage if available
    const trucksFromMemory = loadState();
    // eslint-disable-next-line radix
    // const findTruck = trucksFromMemory.find(element => element.favorite === false);
    if (trucksFromMemory) {
      const favoriteTrucks = trucksFromMemory.filter(elements => elements.favorite === true);
      // eslint-disable-next-line no-console
      // console.log(favoriteTrucks);
      setTruck(favoriteTrucks);
    }
  }, []);
  return (
    <div className={classes.root}>
      {truck.map((element, index) => <Grid container justify="center" alignItems="center" className={classes.grid} key={index}>
      <Avatar alt={element.name} src={element.images ? element.images.image_one : ''} className={classes.avatar} /> {element.name} <Link to={`/details?id=${element.id}`}><Button size="small"
            color="primary"><RemoveRedEye className={classes.awesome}
      onClick={handleViewFavorite}/></Button></Link>
      <Button size="small"
            color="primary"><DeleteOutline className={classes.awesome}
      onClick={handleDeleteFavorite}
      /></Button>
    </Grid>)}
    </div>
  );
}


Favorites.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Favorites);
