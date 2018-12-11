import React, { Component } from "react";

//material gesign
import { Checkbox, ListItemText, ListItem } from "@material-ui/core";

export default class Task extends Component {
  render() {
    let { index, data, newStatus } = this.props;

    return (
      <ListItem
        className="task"
        button
        dense
        index={index}
        onClick={newStatus(!data.status, index)}
      >
        <Checkbox checked={data.status} />
        <ListItemText primary={data.text} secondary={data.date} />
      </ListItem>
    );
  }
}
