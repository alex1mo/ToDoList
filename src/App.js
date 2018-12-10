import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";

import Navigator from "./Components/List/Navigator";
import List from "./Components/List";
import ButtonAddTask from "./Components/Button_add_task";
import FieldAddTask from "./Components/Button_add_task/Field_add_task";

class App extends Component {
  state = {
    openField: false,
    tasks: []
  };

  setStatus = function(value) {
    return () => this.setState({ openField: value });
  }.bind(this);

  addTask = task => () => {
    this.setState(() => {
      this.state.tasks.push(task);
      console.log(this);
    });
  };

  render() {
    let { openField, tasks } = this.state;

    return (
      <div className="App">
        <Header />
        <br />
        <Navigator />
        <List tasks={tasks} />
        <ButtonAddTask open={openField} setStatus={this.setStatus} />
        {openField && (
          <FieldAddTask label="Добавить задание" addTask={this.addTask} />
        )}
      </div>
    );
  }
}

export default App;
