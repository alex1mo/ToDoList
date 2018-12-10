import React, { Component } from "react";
import { Checkbox, ListItemText, ListItem } from "@material-ui/core";

export default class Task extends Component {
  state = {
    checked: false
  };

  render() {
    let { checked } = this.state;

    return (
      <ListItem className="task" button dense>
        <Checkbox checked={checked} />
        <ListItemText primary={"text"} />
      </ListItem>
    );
  }
}
