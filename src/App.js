import React, { Component } from "react";
import "./App.css";

import Header from "./Components/Header";

import Navigator from "./Components/Navigator";
import List from "./Components/List";
import ButtonAddTask from "./Components/Button_add_task";
import FieldAddTask from "./Components/Button_add_task/Field_add_task";

class App extends Component {
  state = {
    openField: false,
    tasks: [],
    colum: 0
  };

  setStatus = function(value) {
    return () => this.setState({ openField: value });
  }.bind(this);

  addTask = task => () => {
    this.setState({
      openField: !this.state.openField,
      tasks: [...this.state.tasks, task]
    });
  };

  newStatus = (status, index) => () => {
    this.setState({
      tasks: this.state.tasks.map((e, i) => {
        if (i === index) {
          e.status = status;
          return e;
        } else {
          return e;
        }
      })
    });
  };

  colum = value => {
    this.setState({
      colum: value
    });
  };

  render() {
    let { openField, tasks, colum } = this.state;

    return (
      <div className="App">
        <Header />
        <br />
        <Navigator colum={this.colum} />
        <List tasks={tasks} newStatus={this.newStatus} colum={colum} />
        <ButtonAddTask open={openField} setStatus={this.setStatus} />
        {openField && (
          <FieldAddTask label="Добавить задание" addTask={this.addTask} />
        )}
      </div>
    );
  }
}

export default App;
