import React, { Component } from "react";
// import Task from "./Task";

export default class List extends Component {
  render() {
    let { tasks } = this.props;
    console.log(tasks);
    return <section className="list" />;
  }
}
