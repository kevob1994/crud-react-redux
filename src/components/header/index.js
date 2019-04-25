import React, { Component } from "react"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./style.scss"
export class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Lista de tareas
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header
