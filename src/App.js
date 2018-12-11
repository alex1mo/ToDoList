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

  componentDidMount() {
    let tasks = localStorage.getItem("APP_TODO_LIST");
    if (tasks) {
      this.setState({
        tasks: JSON.parse(tasks)
      });
    }
  }

  componentDidUpdate() {
    window.scrollTo(0, parseFloat(getComputedStyle(document.body).height));
  }

  setStatus = function(value) {
    return () => this.setState({ openField: value });
  }.bind(this);

  addTask = task => () => {
    let tasks = [...this.state.tasks, task];
    this.setState(
      {
        openField: !this.state.openField,
        tasks: tasks
      },
      localStorage.setItem("APP_TODO_LIST", JSON.stringify(tasks))
    );
  };

  newStatus = (status, index) => () => {
    let buffer = [...this.state.tasks];
    buffer[index].status = status;
    this.setState({
      tasks: [...buffer]
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
          <FieldAddTask
            tasks={tasks}
            label="Добавить задание"
            addTask={this.addTask}
          />
        )}
      </div>
    );
  }
}

export default App;
