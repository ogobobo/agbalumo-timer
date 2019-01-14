import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { saveState, loadState } from '../../tools/localStorage';
import TruckCard from '../../components/TruckCard/TruckCard';
import trucksData from '../../data.json';

const styles = {
  card: {
    // maxWidth: 345,
    flexGrow: 1,
    marginLeft: 87,
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: 'none',
  },
};

function Trucks(props) {
  const [trucks, setTrucks] = useState([]);
  const fetchData = () => {
    setTrucks(trucksData);
  };
  // Store trucks to local storage
  useEffect(() => {
    if (trucks.length > 1) {
      saveState(trucks);
    }
  }, [trucks]);
  // Load trucks from cache
  useEffect(() => {
    const trucksFromMemory = loadState();
    // Load trucks from Session Storage if available
    if (trucksFromMemory) {
      setTrucks(trucksFromMemory);
    } else {
      fetchData();
    }
  }, []);
  const { classes } = props;
  return (
    <div className={classes.card}>
      <Grid container spacing={8}>
          {trucks.map((truck, index) => (
            <Grid key={index} item xs={4}>
            <TruckCard
              truck={truck}
              setFavorite={(id) => {
                trucks.forEach((elem) => {
                  if (elem.id === id) {
                    // eslint-disable-next-line no-param-reassign
                    elem.favorite = true;
                  }
                });
                saveState(trucks);
              }}
            />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

Trucks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trucks);
