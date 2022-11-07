import React from "react";

export default class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
      </div>
    );
  }
}
