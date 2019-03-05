/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import FreeBreakfast from '@material-ui/icons/FreeBreakfast';
import WorkOutline from '@material-ui/icons/WorkOutline';
import PersonAdd from '@material-ui/icons/PersonAdd';
// import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
// import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import Refresh from '@material-ui/icons/Refresh';
import TextField from '@material-ui/core/TextField';
import { saveState, loadState } from '../../tools/localStorage';
// import Card from '@material-ui/core/Card';


const styles = {
  card: {
  },
  media: {
    height: 250,
  },
  button: {
    borderRadius: 9,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  icons: {
    marginLeft: 15,
  },
  timeFont: {
    fontSize: '5rem',
  },
};

function TimerCard(props) {
  const { classes } = props;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [time, setTime] = useState(0);
  const [greeting, setGreeting] = useState('');
  const [username, setUsername] = useState('');
  const [usernameChange, setUsernameChange] = useState(false);

  const fetchData = () => {
    setUsername('');
  };

  useEffect(() => {
    const usernameFromMemory = loadState();
    // Load trucks from Session Storage if available
    if (usernameFromMemory) {
      setUsername(usernameFromMemory);
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (username.length > 1) {
      saveState(username);
    }
  }, [username]);

  useEffect(() => {
    if (username.length > 1) {
      saveState(username);
    }
  }, [username]);

  useEffect(() => {
    const date = new Date();
    if (date.getHours() > 0 && date.getHours() < 12) {
      setGreeting('Good Morning');
    } else if (date.getHours() > 12 && date.getHours() < 16) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  });

  useEffect(() => {
    const counter = setTimeout(() => {
      if (time === 30 || time === 5) {
        // reset seconds to zero and increment minutes by 1 when seconds get to the minute mark
        if (seconds === 1000) {
          // there are 60000 ms in 1 second. so update the seconds above to that
          setSeconds(0);
          setMinutes(minutes + 1);
        } else {
          // keep incrementing seconds if it's not up to a minute yet
          setSeconds(seconds + 1);
        }
      }
    }, 1);
    return () => {
      clearInterval(counter);
    };
  }, [seconds]);

  const handleTimerRefresh = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const handleGrindTime = () => {
    setTime(30);
    setSeconds(1);
  };
  const handleChillTime = () => {
    setTime(5);
    setSeconds(1);
  };

  const handleUsername = () => {
    const form = document.querySelector('form');
    setUsername(form.elements[0].value);
  };

  const handleUsernameChange = () => {
    console.log('name change clicked');
    setUsernameChange(true);
  };

  return (
    <div className={classes.card}>
    <Tooltip title="change or edit username" TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
      <Button
      variant="contained"
      className={classes.button}
      onClick={handleUsernameChange}
      disabled={usernameChange}>
      EDIT NAME
        <PersonAdd className={classes.icons}/>
      </Button>
      </Tooltip>
      <Typography>
         {greeting} {username}!
      </Typography>
      {username === '' && <form autoComplete="off" onSubmit={handleUsername}>
      <TextField
        id="standard-name"
        label="What's your name?"
        margin="normal"
      />
      </form> }
      {usernameChange === true && <form autoComplete="off" onSubmit={handleUsername}>
      <TextField
        id="standard-name"
        label="What's your name?"
        margin="normal"
      />
      </form> }
      <div>
      <Tooltip title="click to grind for 30 minutes" TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
      <Button
      variant="contained"
      className={classes.button}
      onClick={handleGrindTime}>
      GRIND
        <WorkOutline className={classes.icons}/>
      </Button>
      </Tooltip>
      <Tooltip title="refresh timer" TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
      <Button
      variant="contained"
      className={classes.button}
      onClick={handleTimerRefresh}>
      REFRESH
        <Refresh className={classes.icons}/>
      </Button>
      </Tooltip>
      <Tooltip title="click to chill for 5 minutes" TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
      <Button
      variant="contained"
      className={classes.button}
      onClick={handleChillTime}>
      CHILL
        <FreeBreakfast className={classes.icons}/>
      </Button>
      </Tooltip>
      </div>
      <div>
        <Typography
        className={classes.timeFont}>
      {minutes}.{seconds}
      </Typography>
      </div>
    </div>
  );
}


TimerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimerCard);
