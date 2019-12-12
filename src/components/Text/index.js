import React, { Component } from "react";
import "./style.css";

class Text extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <p className="text">{title}</p>
      </div>
    );
  }
}
export default Text;
