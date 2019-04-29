import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from './components/header';
import FormTodo from './components/formTodo';
import TableTodo from './components/tableTodo';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <Grid fluid>
          <Row>
            <Col xs={12} md={12} lg={3}>
              <FormTodo />
            </Col>
            <Col xs={12} md={12} lg={9}>
              <TableTodo />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
