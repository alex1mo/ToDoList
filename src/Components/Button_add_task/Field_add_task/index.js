import React, { Component } from "react";

//meterial design

import { TextField, Button } from "@material-ui/core";

//css

import "./index.css";

class FieldAddTask extends Component {
  state = {
    text: ""
  };

  pullText = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    let { label, addTask } = this.props;
    let { text } = this.state;

    return (
      <div className="field_add_task">
        <TextField
          label={label}
          variant="outlined"
          id="custom-css-outlined-input"
          fullWidth={true}
          onChange={this.pullText}
        />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={addTask({ text })}
        >
          Добавить
        </Button>
      </div>
    );
  }
}

export default FieldAddTask;
