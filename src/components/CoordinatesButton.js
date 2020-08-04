import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {

  constructor(props) {
    super()
  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}/>
      </div>
    )
  }

}