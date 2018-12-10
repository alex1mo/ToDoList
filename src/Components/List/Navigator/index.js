import React, { Component } from "react";
import { Tabs, Tab } from "@material-ui/core/";

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0
    };
  }

  render() {
    let { val } = this.state;

    return (
      <Tabs
        value={val}
        onChange={(event, val) => {
          this.setState({ val });
        }}
      >
        <Tab label="Задания" />
        <Tab label="Выполнено" />
        <Tab label="Все" />
      </Tabs>
    );
  }
}

export default Navigator;
