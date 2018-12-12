import React, { Component } from "react";
import { Tabs, Tab } from "@material-ui/core/";

// import "./index.css";

class Navigator extends Component {
  state = {
    val: 0
  };

  render() {
    let { val } = this.state;
    let { colum } = this.props;

    return (
      <Tabs
        value={val}
        onChange={(event, val) => {
          this.setState({ val });
          colum(val);
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
