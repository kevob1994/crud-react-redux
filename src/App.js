import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToList } from './actions/todoList.actions';

class App extends Component {
  
  render() {
    console.log(this.props.todoList)
    return (
      <div>
        {/* { this.props.todoList} */}
        <button onClick={()=>{this.props.addToList('prueba')}}></button>
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
