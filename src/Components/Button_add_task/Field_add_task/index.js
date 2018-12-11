import React, { Component } from "react";

//meterial design

import { TextField, Button } from "@material-ui/core";

//css

import "./index.css";

class FieldAddTask extends Component {
  state = {
    text: "",
    deadline: null
  };

  pullText = e => {
    this.setState({ text: e.target.value });
  };

  pullDeadline = e => {
    this.setState({ deadline: e.target.value });
  };

  render() {
    let { label, addTask, tasks } = this.props;
    let { text, deadline } = this.state;

    return (
      <div className="field_add_task">
        <TextField
          label={label}
          variant="outlined"
          id="custom-css-outlined-input"
          fullWidth={true}
          onChange={this.pullText}
        />
        <TextField
          id="datetime-local"
          label="Выполнить до"
          type="datetime-local"
          defaultValue={new Date().toISOString().slice(0, 16)}
          onChange={this.pullDeadline}
        />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={addTask({
            text,
            deadline,
            status: false,
            date: new Date().toLocaleString(),
            index: tasks.length
          })}
        >
          Добавить
        </Button>
      </div>
    );
  }
}

export default FieldAddTask;
