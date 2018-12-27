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
    colum: 0,
    index: null
  };

  componentDidMount() {
    let tasks = localStorage.getItem("APP_TODO_LIST");
    if (tasks) {
      this.setState({
        tasks: JSON.parse(tasks)
      });
    }
    window.scrollTo(0, parseFloat(getComputedStyle(document.body).height));
  }

  reloadTasks = function(tasks, open, index) {
    localStorage.setItem("APP_TODO_LIST", JSON.stringify(tasks));
    this.setState({
      openField: open,
      tasks,
      index
    });
  }.bind(this);

  colum = value => {
    this.setState({
      colum: value
    });
  };

  render() {
    let { openField, tasks, colum, index } = this.state;
    return (
      <div className="App">
        <Header />
        <br />

        <Navigator colum={this.colum} />
        <List tasks={tasks} reloadTasks={this.reloadTasks} colum={colum} />
        <ButtonAddTask
          open={openField}
          openField={openField}
          reloadTasks={this.reloadTasks}
          tasks={tasks}
        />
        {openField && (
          <FieldAddTask
            tasks={tasks}
            label="Добавить задание"
            reloadTasks={this.reloadTasks}
            openField={openField}
            index={index}
          />
        )}
      </div>
    );
  }
}

export default App;
