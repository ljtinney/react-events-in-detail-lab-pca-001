import React, { Component } from 'react';

export default class DelayedButton extends React.Component {

  constructor(props) {
    super()
  }

  handleClick = (event) => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delayed</button>
      </div>
    )
  }

}