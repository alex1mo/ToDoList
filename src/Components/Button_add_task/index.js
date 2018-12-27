import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import "./index.css";

export default class ButtonAddTask extends Component {
  open = status => () => {
    this.props.reloadTasks(this.props.tasks, status);
  };

  render() {
    let { openField } = this.props;

    return (
      <div className="btn add_task">
        <Fab
          size={"large"}
          onClick={this.open(!openField)}
          className="add_task"
        >
          {openField ? "-" : "+"}
        </Fab>
      </div>
    );
  }
}
