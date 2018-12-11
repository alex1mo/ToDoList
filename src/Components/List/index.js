import React, { Component } from "react";
import Task from "./Task";

export default class List extends Component {
  render() {
    let { tasks, newStatus, colum } = this.props;

    return (
      <section className="list">
        {tasks &&
          tasks
            .filter(e => {
              switch (colum) {
                case 0:
                  return !e.status;
                case 1:
                  return e.status;
                default:
                  return true;
              }
            })
            .map((e, i) => (
              <Task key={i} index={i} data={e} newStatus={newStatus} />
            ))}
      </section>
    );
  }
}
