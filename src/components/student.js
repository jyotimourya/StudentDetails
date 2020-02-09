import React from "react";
import store from "../store";

import { ADD_NAME } from "../store/names";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const name = {
      id: this.props.data.name.length + 1,
      desc: this.state.value,
      completed: false
    };

    store.dispatch({
      type: ADD_NAME,
      payload: name
    });
    this.setState({
      value: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <p> {this.state.value}</p>
          <button type="submit">Save details </button>
        </form>
      </div>
    );
  }
}

export default Student;
