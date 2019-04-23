import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import './style.scss';

export class TableTodo extends Component {
  render() {
    return (
      <div className="card">
        <Paper >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tarea</TableCell>
                <TableCell align="right">Encargado</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.name}
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.calories}</CustomTableCell>
                  <CustomTableCell align="right">{row.fat}</CustomTableCell>
                  <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                  <CustomTableCell align="right">{row.protein}</CustomTableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default TableTodo;