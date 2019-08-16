import React, { Component } from "react";

class CondRendofLists extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  //conditional rendering of lists
  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags!!</p>;

    return (
      <ul>
        {this.state.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please enter a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default CondRendofLists;
