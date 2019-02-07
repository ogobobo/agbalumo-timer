import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ImageSearch from '@material-ui/icons/ImageSearch';


const styles = {
  root: {
    // fontSize: '1.3rem',
    backgroundImage: 'url("https://images.unsplash.com/reserve/9JMZhTL8T7ulzIoD2E78_2010_02280041.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    maxHeight: '100vh',
    backgroundRepeat: 'no-repeat',
  },
  awesome: {
    marginLeft: 13,
    fontSize: '2rem',
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
  button: {
    textDecoration: 'none',
    borderRadius: 15,
    // color: '#FFF',
    // borderColor: '#FFF',
  },
};
/**
 * Home
 * Fetches trucks and renders component
 */

function Home(props) {
  const { classes } = props;
  // useEffect(() => {
  //   document.body.style.background = 'linear-gradient(to right, #e0eafc, #cfdef3)';
  // });
  return (
    <div className={classes.root}>
    <Grid container justify="center" spacing={0}
  direction="column"
  alignItems="center"
  className={classes.grid}><Link to="/trucks" className={classes.link} >
      <Button color="primary" className={classes.button} variant="outlined">Browse Trucks <ImageSearch className={classes.awesome}/></Button></Link>
      </Grid>
      </div>
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
