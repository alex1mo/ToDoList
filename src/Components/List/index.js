import React, { Component } from "react";
import Task from "./Task";

import "./index.css";

export default class List extends Component {
  render() {
    let { tasks, colum, reloadTasks } = this.props;

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
              <Task key={i} data={e} tasks={tasks} reloadTasks={reloadTasks} />
            ))}
      </section>
    );
  }
}
