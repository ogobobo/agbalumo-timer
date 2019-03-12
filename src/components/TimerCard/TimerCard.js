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
import { saveStateName, loadStateName } from '../../tools/localStorage';
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
    fontSize: '10rem',
    marginLeft: 10,
  },
  paragraph: {
    fontSize: '0.9rem',
  },
  seconds: {
    marginLeft: 160,
    color: 'grey',
  },
  minutes: {
    color: 'grey',
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
  const [chill, setChill] = useState(false);
  const [grind, setGrind] = useState(false);
  // secondText to make the second text dynamic.
  // So if timer is less than 2 seconds, it reads as second
  // And if greater than 2 seconds, it reads as seconds
  // Similar logic for minuteText
  const [secondText, setSecondText] = useState('SECOND');
  const [minuteText, setMinuteText] = useState('MINUTE');

  const fetchData = () => {
    setUsername('');
  };

  useEffect(() => {
    const usernameFromMemory = loadStateName();
    // Load trucks from Session Storage if available
    if (usernameFromMemory) {
      setUsername(usernameFromMemory);
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (username.length > 1) {
      saveStateName(username);
    }
  }, [username]);

  useEffect(() => {
    const date = new Date();
    if (date.getHours() >= 0 && date.getHours() < 12) {
      setGreeting('Good Morning,');
    } else if (date.getHours() >= 12 && date.getHours() < 16) {
      setGreeting('Good Afternoon,');
    } else {
      setGreeting('Good Evening,');
    }
  });

  useEffect(() => {
    const counter = setTimeout(() => {
      if (time === 30 || time === 5) {
        // reset seconds to zero and increment minutes by 1 when seconds get to the minute mark
        if (seconds === 59) {
          // there are 60000 ms in 1 second. so update the seconds above to that
          setSeconds(0);
          setSecondText('SECOND');
          setMinutes(minutes + 1);
        } else {
          // keep incrementing seconds if it's not up to a minute yet
          setSeconds(seconds + 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  }, [seconds]);

  useEffect(() => {
    // makes counter stop when time is 5 minutes
    // for when the user clicks on chill
    if (minutes === 5 && chill === true) {
      setTime(0);
      setSeconds(0);
      // setMinutes(0);
    }
  }, [seconds]);

  useEffect(() => {
    // makes counter stop when time is 30 minutes
    // for when the user clicks on grind
    if (minutes === 30 && grind === true) {
      setTime(0);
      setSeconds(0);
      // setMinutes(0);
    }
  }, [seconds]);


  useEffect(() => {
    // makes counter stop when time is 30 minutes
    // for when the user clicks on grind
    if (time === 0 && minutes === 0 && seconds === 0 && chill === false && grind === false) {
      setTime(0);
      setSeconds(0);
      // setMinutes(0);
    }
  }, [seconds]);

  useEffect(() => {
    // makes counter stop when time is 30 minutes
    // for when the user clicks on grind
    if (time === 0 && minutes === 0 && seconds === 0 && chill === false && grind === false) {
      setTime(0);
      setSeconds(0);
      // setMinutes(0);
    }
  }, [minutes]);

  useEffect(() => {
    // makes counter stop when time is 30 minutes
    // for when the user clicks on grind
    if (time === 0 && minutes === 0 && seconds === 0 && chill === false && grind === false) {
      setTime(0);
      setSeconds(0);
      // setMinutes(0);
    }
  }, [time]);

  useEffect(() => {
    // set second and minute text to singular or plural
    if (minutes > 1) {
      setMinuteText('MINUTES');
    }
  }, [minutes]);

  useEffect(() => {
    // set second and minute text to singular or plural
    if (seconds > 1) {
      setSecondText('SECONDS');
    }
  }, [seconds]);

  const handleGrindTime = () => {
    setTime(0);
    setMinutes(0);
    setSeconds(0);
    setTime(30); // 30 minute work session
    setSeconds(1);
    setGrind(true);
    setChill(false);
  };
  const handleChillTime = () => {
    setTime(0);
    setMinutes(0);
    setSeconds(0);
    setTime(5); // 5 minute rest time
    setSeconds(1);
    setGrind(false);
    setChill(true);
  };

  const handleTimerRefresh = () => {
    // reset time to zero when user clicks refresh
    setGrind(false);
    setChill(false);
    setTime(0);
    setSeconds(0);
    setMinutes(0);
    setSecondText('SECOND');
    setMinuteText('MINUTE');
  };


  const handleUsername = (event) => {
    // this prevents page reload by preventing default form submission
    event.preventDefault();
    // this gets the name/value users enter on the form
    const form = document.querySelector('form');
    setUsername(form.elements[0].value.trim());
    // this makes form disappear on submit
    setUsernameChange(false);
  };

  const handleUsernameChange = () => {
    // console.log('name change clicked');
    // this displays user name form when users click on edit name
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
      RESET
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
        <Typography className={classes.minutes}>{minuteText}</Typography>
        <Typography
        className={classes.timeFont}>
      {minutes}.{seconds}
      </Typography>
      <Typography className={classes.seconds}>{secondText}</Typography>
      </div>
    </div>
  );
}


TimerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimerCard);
