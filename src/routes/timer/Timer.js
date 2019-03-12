import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Fade from '@material-ui/core/Fade';
// import Tooltip from '@material-ui/core/Tooltip';
// import WorkOutline from '@material-ui/icons/WorkOutline';
// import Typography from '@material-ui/core/Typography';
// import PersonAdd from '@material-ui/icons/PersonAdd';
// import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
// import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
// import Refresh from '@material-ui/icons/Refresh';

import TimerCard from '../../components/TimerCard/TimerCard';
import TaskCard from '../../components/TaskCard/TaskCard';
// import trucksData from '../../data.json';

const styles = {
  card: {
    flexGrow: 1,
    marginTop: 30,
  },
};

function Timer(props) {
  const { classes } = props;
  // const name = 'hey hey hey';
  return (
    <div className={classes.card}>
    <Grid
  container
  spacing={0}
  direction="column"alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
> <Grid item xm={8} className={classes.card}>
  <TimerCard />
  <TaskCard />
  </Grid>  </Grid>
  </div>
  );
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timer);
