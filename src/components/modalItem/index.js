import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { updateToList } from "./../../actions/todoList.actions"
import "./style.scss";

class ModalItem extends Component {

  constructor({ task }) {
    super();
    this.state = {
      id: task.id,
      task: task.task,
      user: task.user,
      prioritySelected: task.prioritySelected
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  updateItem = () => {
    this.props.updateToList(this.state)
    this.props.closeModal()
  }

  buttonState = () => {
    if (this.state.task === ""
      || this.state.user === ""
      || this.state.prioritySelected === "") {
      return (
        <Button variant="contained" disabled className="disableButton">
          Modificar
        </Button>
      )
    }
  
    return (
      <Button variant="contained" onClick={() => { this.updateItem() }}>
        Modificar
      </Button>
    )
  }

  render() {
    const priority = ["baja", "media", "alta"]
    return (
      <div className="formulario">
        <Paper >
          <Typography variant="h4" gutterBottom>
            Modificar tarea
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
            <Button variant="contained" className="cancelButton" onClick={() => { this.props.closeModal() }}>
              Cancelar
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

ModalItem.propTypes = {
  task: PropTypes.object,
  updateToList: PropTypes.func,
  closeModal: PropTypes.func
}

export default connect(null, { updateToList })(ModalItem);