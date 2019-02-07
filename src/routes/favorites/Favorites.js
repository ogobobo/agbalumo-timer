/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import { loadState, saveState } from '../../tools/localStorage';

const styles = {
  root: {
    marginTop: 90,
  },
  avatar: {
    marginLeft: 35,
    // marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    boxShadow: '0px 5px 7px 5px rgba(0, 0, 255, 0.10)',
  },
  awesome: {
    boxShadow: '0px 5px 7px 5px rgba(0, 0, 255, 0.10)',
  },
  grid: {
    marginTop: 20,
    marginLeft: 10,
  },
  button: {
    borderRadius: 15,
  },
  name: {
    marginTop: 15,
    margin: 'auto',
    textAlign: 'center',
  },
  card: {
    boxShadow: '0px 5px 7px 5px rgba(0, 0, 255, 0.10)',
    borderRadius: 10,
    marginLeft: 15,
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


  useEffect(() => {
    // Load trucks from Session Storage if available
    const trucksFromMemory = loadState();
    if (trucksFromMemory) {
      const favoriteTrucks = trucksFromMemory.filter(elements => elements.favorite === true);
      setTruck(favoriteTrucks);
    }
  }, []);

  // this will delete favorites, and update the favorite button on
  // the trucks page to no longer be disabled
  const handleDeleteFavorite = () => {
    const trucksFromMemory = loadState();
    // console.log(trucksFromMemory);
    const keeptrucks = trucksFromMemory.filter(element => element.favorite === true);
    keeptrucks[0].favorite = false;
    // console.log(trucksFromMemory);
    saveState(trucksFromMemory);
    window.location.reload();
  };
  return (
    <div className={classes.root}>
      <Grid container>
      {truck.map((element, index) => <Grid justify="center" alignItems="center" className={classes.grid} key={index}>
      <Card className={classes.card}>
      <CardContent>
      <Avatar alt={element.name} src={element.images ? element.images.image_one : ''} className={classes.avatar} /> <Typography className={classes.name} color="textSecondary" gutterBottom>
      {element.name}
        </Typography>
        <Typography className={classes.name} color="textSecondary" gutterBottom>
      &#8358;{element.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={`view details for ${element.name}`} TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
      <Link to={`/details?id=${element.id}`}><Button size="small"
            color="primary" className={classes.button}><RemoveRedEye className={classes.awesome}
      /></Button></Link></Tooltip>
      <Tooltip title={`delete ${element.name} from favorites!`} TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
      <Button size="small"
            color="primary" className={classes.button}><DeleteOutline className={classes.awesome}
      onClick={handleDeleteFavorite}
      /></Button></Tooltip>
      </CardActions>
      </Card>
    </Grid>)
    }
    </Grid>
    </div>
  );
}


Favorites.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Favorites);
