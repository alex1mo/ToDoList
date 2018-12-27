import React, { Component } from "react";

//material gesign
import { Checkbox, ListItemText, ListItem, Fab } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import "./index.css";

export default class Task extends Component {
  newStatus = (tasks, status, index) => {
    return e => {
      tasks[index].status = status;
      this.props.reloadTasks(tasks);
    };
  };

  delete = (tasks, index) => e => {
    e.stopPropagation();

    tasks.splice(tasks[index], 1);

    this.props.reloadTasks(
      tasks.map((e, i) => {
        e.index = i;
        return e;
      })
    );
  };

  render() {
    let { data, tasks, reloadTasks } = this.props;

    return (
      <ListItem
        className="task"
        button
        dense
        index={data.index}
        onClick={this.newStatus(tasks, !data.status, data.index)}
      >
        <Checkbox checked={data.status} />
        <ListItemText
          primary={data.text}
          secondary={`c ${data.date} ${(data.deadline || "") &&
            `до ${data.deadline}`}`}
        />
        <div>
          {!data.status && (
            <Fab
              size="small"
              color="secondary"
              className="btn edit"
              onClick={e => {
                e.stopPropagation();
                reloadTasks(tasks, true, data.index);
              }}
            >
              <Edit />
            </Fab>
          )}
          <Fab
            size="small"
            aria-label="Delete"
            className="btn delete"
            onClick={this.delete(tasks, data.index)}
          >
            <DeleteIcon />
          </Fab>
        </div>
      </ListItem>
    );
  }
}
