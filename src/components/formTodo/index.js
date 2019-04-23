import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import './style.scss';

export class FormTodo extends Component {
  state = {
    prioritySelected: ""
  }
  handleChange  = event => {
    this.setState({
      prioritySelected: event.target.value,
    });
    console.log(this.state)
  };
  render() {
    const priority = ["baja", "media","alta"]
    return (
      <div className="formulario">
      <Paper >
        <Typography variant="h4" gutterBottom>
        Nueva tarea
      </Typography>
        <form  noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Tarea"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-name"
          label="Encargado"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={this.state.prioritySelected}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        >
          {priority.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
 
        </form>
        </Paper>
      </div>
    )
  }
}

export default FormTodo;