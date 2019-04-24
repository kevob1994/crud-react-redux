import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { addToList } from './actions/todoList.actions';
import Header from './components/header'
import FormTodo from './components/formTodo'
import TableTodo from './components/tableTodo'

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
        {/* { this.props.todoList} */}
        {/* <button onClick={()=>{this.props.addToList('prueba')}}></button> */}
      </div>
    );
  }
}

App.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = ({todoList}) => ({
  todoList: todoList.todoList
})
export default connect(mapStateToProps,{ addToList })(App);
