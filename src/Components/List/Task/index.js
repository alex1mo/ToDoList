import React, { Component } from "react";

//material gesign
import { Checkbox, ListItemText, ListItem, Fab } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./index.css";

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
        <div>
          <Fab size="small" color="secondary" className="btn edit">
            <Edit />
          </Fab>
          <Fab size="small" aria-label="Delete" className="btn delete">
            <DeleteIcon />
          </Fab>
        </div>
      </ListItem>
    );
  }
}
