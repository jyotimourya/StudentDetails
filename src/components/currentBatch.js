import React from "react";
import store from "../store";

import { REMOVE_NAME } from "../store/names";

class CurrentBatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    let student = this.props.data.map((order, key) => {
      return (
        <tr key={key}>
          <td>{order.id}</td>
          <td>{order.desc}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger btn-xs"
              onClick={this.deleteOrder.bind(this, order.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="order-list">
        <div className="container">
          <h2>Students Detail</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>{student}</tbody>
          </table>
        </div>
      </div>
    );
  }
  deleteOrder(id) {
    console.log(id+"DELETED");
    store.dispatch({
      type: REMOVE_NAME,
      id
    });
  }
}
export default CurrentBatch;
