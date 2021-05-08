import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.compnents";
import "./directory.scss";
import Directory_Data from "./directory.data";
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: Directory_Data,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
