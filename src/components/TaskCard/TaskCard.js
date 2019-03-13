/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import WorkOutline from '@material-ui/icons/WorkOutline';
// import Tooltip from '@material-ui/core/Tooltip';
// import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { saveStateTask, loadStateTask } from '../../tools/localStorage';


const styles = {
  card: {
  },
  media: {
    height: 250,
  },
  button: {
    marginLeft: 10,
  },
  icons: {
    marginLeft: 15,
    color: 'green',
  },
  form: {
    justify: 'center',
    alignItems: 'center',
  },
  list: {
    color: 'grey',
    marginTop: 0,
  },
};

function TaskCard(props) {
  const { classes } = props;
  // empty array for tasks to be populated by users
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    setTasks([]);
  };

  useEffect(() => {
    const tasksFromMemory = loadStateTask();
    // Load trucks from Session Storage if available
    if (tasksFromMemory) {
      setTasks(tasksFromMemory);
    } else {
      fetchTasks();
    }
  }, []);

  useEffect(() => {
    // if task array is truthy (i.e not null or an empty array)
    // save array to local storage
    if (tasks) {
      saveStateTask(tasks);
    }
  }, [tasks]);

  const handleDeleteTask = (e) => {
    // eslint-disable-next-line prefer-destructuring
    const deleteTask = e.currentTarget.parentNode.innerText;
    // the filter method below deletes any task that's clicked on
    const remainingTasks = tasks.filter(task => task.indexOf(deleteTask) === -1);
    setTasks(remainingTasks);
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();
    // grab inputed tasks
    const taskInput = document.querySelector('#outlined-full-width').value.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').toUpperCase();
    // append new tasks to the task array, removing leading and trailing spaces
    if (tasks.indexOf(taskInput) === -1) {
      setTasks([...tasks, taskInput]);
      document.querySelector('#outlined-full-width').value = '';
    } else {
      // prevent already existing tasks from being added to to-do list
      document.querySelector('#outlined-full-width').value = 'Task Already Exists!';
    }
    // console.log(tasks);
  };

  return (
    <div className={classes.card}>
    <form autoComplete="off" onSubmit={handleSubmitTask} className={classes.form}>
    <TextField
        id="outlined-full-width"
        label="TASKS"
        style={{ marginLeft: 0, marginRight: 0, marginTop: 50 }}
        placeholder="What do you want to work on?"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </form>
        <ol className={classes.list}>
        <Typography>
            {/* this mapping grabs tasks from the tasks array and creates a list */}
    { tasks.map((task, index) => <li key={index} className={classes.list}>{task}<Button
    className={classes.button}
    onClick={handleDeleteTask}><Delete/></Button></li>)}
    </Typography>
    </ol>
    </div>
  );
}

TaskCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskCard);
