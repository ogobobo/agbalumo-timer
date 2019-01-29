import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Carousel, BImg } from 'bootstrap-4-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import queryString from 'query-string';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintRoller,
  faStickyNote,
  faTachometerAlt,
  faMapMarkerAlt,
  faIdBadge,
} from '@fortawesome/free-solid-svg-icons';
import PhonelinkRing from '@material-ui/icons/PhonelinkRing';
import { loadState } from '../../tools/localStorage';

library.add(faPaintRoller,
  faStickyNote,
  faTachometerAlt,
  faMapMarkerAlt,
  faIdBadge);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: 90,
    marginLeft: 200,
  },
  grid: {
    // marginLeft: 300,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  awesome: {
    marginLeft: 15,
    marginRight: 10,
    color: '#3f51b5',
    boxShadow: '0px 5px 7px 5px rgba(0, 0, 255, 0.15)',
  },
  image: {
    width: 600,
    height: 400,
    borderRadius: 15,
    boxShadow: '0px 5px 7px 5px rgba(0, 0, 255, 0.15)',
  },
  details: {
    marginTop: 20,
  },
});

function Details(props) {
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
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={0}
  direction="column" className={classes.grid}>
      <Carousel w="10" id="carouselExampleControls" data-interval="false">
        <Carousel.Inner className={classes.image}>
        <Carousel.Indicators>
          <Carousel.Indicator target="#carouselExampleIndicators" to="0" active />
          <Carousel.Indicator target="#carouselExampleIndicators" to="1" />
          <Carousel.Indicator target="#carouselExampleIndicators" to="2" />
          <Carousel.Indicator target="#carouselExampleIndicators" to="3" />
          <Carousel.Indicator target="#carouselExampleIndicators" to="4" />
        </Carousel.Indicators>
        <Carousel.Item active><BImg display="block" w="100" src={ truck.images ? truck.images.image_one : ''} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={truck.images ? truck.images.image_two : ''} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={truck.images ? truck.images.image_three : ''} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={truck.images ? truck.images.image_four : ''} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={truck.images ? truck.images.image_five : ''} /></Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleControls">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleControls">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
      </Grid>
      <div className={classes.details}>
      <p>
      <FontAwesomeIcon icon="id-badge" className={classes.awesome}/> { truck.name }
     </p>
       <p>
       <FontAwesomeIcon icon="sticky-note" className={classes.awesome}/> { truck.details ? truck.details.long_description : ''}
       </p>
       <p>
       <FontAwesomeIcon icon="paint-roller" className={classes.awesome}/> { truck.details ? truck.details.colour : '' }
       </p>
       <p>
       <FontAwesomeIcon icon="tachometer-alt" className={classes.awesome}/>{ truck.details ? `${truck.details.mileage} Miles` : '' }
       </p>
       <p>
       <PhonelinkRing className={classes.awesome}/>{ truck.contact_info ? truck.contact_info.phone_number : '' }
       </p>
       <p>
       <FontAwesomeIcon icon="map-marker-alt" className={classes.awesome}/>{ truck.details ? truck.details.location : '' }
       </p>
       </div>
    </div>
  );
}


Details.propTypes = {
  location: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Details);
