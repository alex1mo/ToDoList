import React, { Component } from "react";
import Task from "./Task";

export default class List extends Component {
  render() {
    return (
      <section className="list">
        <Task />
      </section>
    );
  }
}
