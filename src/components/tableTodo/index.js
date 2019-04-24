import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import { deleteToList } from './../../actions/todoList.actions'
import './style.scss';

export class TableTodo extends Component {
  state = {
    openModal: false
  }
  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };



  render() {
    return (
      <div className="card">
        <Paper >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tarea</TableCell>
                <TableCell align="right">Encargado</TableCell>
                <TableCell align="right">Prioridad</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.taskList.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.task}
                  </TableCell>
                  <TableCell align="right">
                    {row.user}
                  </TableCell>
                  <TableCell align="right" >
                    <div className={row.prioritySelected}>
                      {row.prioritySelected}
                    </div>
                  </TableCell>
                  <TableCell align="right">
                  <Grid fluid>
                    <Row>
                      <Col xs={6} onClick= {()=>{this.handleOpen()}}>
                        <svg className="updateTask" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                      </Col>
                      <Col xs={6} onClick= {()=>{this.props.deleteToList(row.id)}}>
                      <svg className="deleteTask" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                      </Col>
                    </Row>
                  </Grid>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        


        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openModal}
          onClose={this.handleClose}
          disableAutoFocus={true}
          disableEnforceFocus={false}
        >
          <div className="parent">
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = ({todoList}) =>({
  taskList: todoList.todoList
})

export default connect(mapStateToProps,{deleteToList})(TableTodo);