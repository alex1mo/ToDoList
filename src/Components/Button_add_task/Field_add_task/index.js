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

  componentDidMount() {
    window.scrollTo(0, parseFloat(getComputedStyle(document.body).height));
  }

  pullText = e => {
    this.setState({ text: e.target.value });
  };

  pullDeadline = e => {
    this.setState({ deadline: e.target.value });
  };

  addTask = task => {
    return () => {
      let tasks = this.props.tasks;
      tasks = [...tasks, task];
      this.props.reloadTasks(tasks, !this.props.openField);
    };
  };

  editTask = (text, index) => () => {
    this.props.tasks[index].text = text;
    this.props.reloadTasks(this.props.tasks, !this.props.openField, null);
  };

  render() {
    let { label, tasks, index } = this.props;
    let { text, deadline } = this.state;
    console.log(index);

    return (
      <div className="field_add_task">
        <TextField
          label={label}
          defaultValue={(index >= 0 || "") && tasks[index].text}
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
          onClick={
            index
              ? this.editTask(text, index)
              : this.addTask({
                  text,
                  deadline,
                  status: false,
                  date: new Date().toLocaleString(),
                  index: tasks.length
                })
          }
        >
          {index !== undefined ? "Редактировать" : "Добавить"}
        </Button>
      </div>
    );
  }
}

export default FieldAddTask;
