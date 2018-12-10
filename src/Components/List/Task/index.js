import React, { Component } from "react";
import { Checkbox, ListItemText, ListItem } from "@material-ui/core";

export default class Task extends Component {
  state = {
    checked: false
  };

  render() {
    let { checked } = this.state;
    let { index, data } = this.props;

    return (
      <ListItem className="task" button dense index={index}>
        <Checkbox checked={checked} />
        <ListItemText primary={data.text} />
      </ListItem>
    );
  }
}
