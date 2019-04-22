import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from './actions/todoList.actions';

class App extends Component {
  render() {
    return (
      <div>
        { this.props.todoList}
        <button onClick={()=>{this.props.addToList('prueba')}}></button>
      </div>
    );
  }
}

const mapStateToProps = ({todoList}) => ({
  todoList: todoList.todoList
})
export default connect(mapStateToProps,{ addToList })(App);
