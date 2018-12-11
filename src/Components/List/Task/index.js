import React, { Component } from "react";

//material gesign
import { Checkbox, ListItemText, ListItem } from "@material-ui/core";

export default class Task extends Component {
  render() {
    let { data, newStatus } = this.props;

    return (
      <ListItem
        className="task"
        button
        dense
        index={data.index}
        onClick={newStatus(!data.status, data.index)}
      >
        <Checkbox checked={data.status} />
        <ListItemText
          primary={data.text}
          secondary={`c ${data.date} ${(data.deadline || "") &&
            `до ${data.deadline}`}`}
        />
      </ListItem>
    );
  }
}
