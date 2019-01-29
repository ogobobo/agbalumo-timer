import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ImageSearch from '@material-ui/icons/ImageSearch';


const styles = {
  root: {
    textDecoration: 'none',
  },
  awesome: {
    marginLeft: 13,
  },
  grid: {
    minHeight: '100vh',
    textDecoration: 'none',
  },
  link: {
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
};
/**
 * Home
 * Fetches trucks and renders component
 */
function Home(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" spacing={0}
  direction="column"
  alignItems="center"
  className={classes.grid}><Link to="/trucks" className={classes.link} >
      <Button color="primary" className={classes.root} >Browse Trucks <ImageSearch className={classes.awesome}/></Button></Link>
      </Grid>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
/**
 * propTypes
 * @property {function} truckAPI - API to retrieve Trucks.
 */
// Home.propTypes = {
//   truckAPI: PropTypes.func,
// };
