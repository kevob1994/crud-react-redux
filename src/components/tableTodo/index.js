import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import './style.scss';

export class TableTodo extends Component {
  state = {
    listTask: [
      {
        id: 1,
        task: "Mantener la aplicacion",
        user: "Kevin"
      }, {
        id: 2,
        task: "Programar la aplicacion",
        user: "Pepe"
      }, {
        id: 3,
        task: "Programar la aplicacion",
        user: "Juan"
      }]
  }
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
                  <TableCell align="right">
                    {row.prioritySelected}
                  </TableCell>
                  <TableCell align="right">
                  <Grid fluid>
                    <Row>
                      <Col xs={6} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                      </Col>
                      <Col xs={6} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                      </Col>
                    </Row>
                  </Grid>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}
const mapStateToProps = ({todoList}) =>{
  console.log(todoList.todoList)
  return({
    taskList: todoList.todoList
  })
}
export default connect(mapStateToProps,null)(TableTodo);