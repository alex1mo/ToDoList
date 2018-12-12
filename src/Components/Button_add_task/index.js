import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import "./index.css";

export default class ButtonAddTask extends Component {
  render() {
    let { open } = this.props;

    return (
      <div className="btn add_task">
        <Fab size={"large"} className="add_task">
          {open ? "-" : "+"}
        </Fab>
      </div>
    );
  }
}
