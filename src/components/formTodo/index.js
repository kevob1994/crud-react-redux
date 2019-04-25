import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addToList } from "./../../actions/todoList.actions"
import "./style.scss";

export class FormTodo extends Component {

  state = {
    task: "",
    user: "",
    prioritySelected: ""
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  addItem = () => {
    this.props.addToList(this.state)
    this.setState({ task: "", user: "", prioritySelected: "" })
  }

  buttonState = () => {
    if (this.state.task === ""
      || this.state.user === ""
      || this.state.prioritySelected === "") {
      return (
        <Button variant="contained" disabled className="disableButton">
          Agregar
        </Button>
      )
    }
    return (
      <Button variant="contained" onClick={() => { this.addItem() }}>
        Agregar
      </Button>
    )
  }

  render() {
    const priority = ["baja", "media", "alta"]
    return (
      <div className="formulario">
        <Paper >
          <Typography variant="h4" gutterBottom>
            Nueva tarea
      </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Tarea"
              value={this.state.task}
              onChange={this.handleChange("task")}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-name"
              label="Encargado"
              value={this.state.user}
              onChange={this.handleChange("user")}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={this.state.prioritySelected}
              onChange={this.handleChange("prioritySelected")}
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
            {this.buttonState()}
          </form>
        </Paper>
      </div>
    )
  }
}



export default connect(null, { addToList })(FormTodo);