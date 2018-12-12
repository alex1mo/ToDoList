import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import "./index.css";

export default class ButtonAddTask extends Component {
  render() {
    let { open, setStatus } = this.props;
    return (
      <div className="btn add_task">
        <Fab size={"large"} onClick={setStatus(!open)} className="add_task">
          {open ? "-" : "+"}
        </Fab>
      </div>
    );
  }
}
