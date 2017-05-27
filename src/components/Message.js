import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newLikes: this.props.likes
    }
    this.handleNewLike = this.handleNewLike.bind(this)
  }

  handleNewLike() {
    console.log('You clicked thumbs up')
    console.log(this.state.newLikes)
    }

  render() {
    //console.log('props.children: ', this.props.children)
    return(
      <li data-id="${key}">
        {this.props.children}
        <i className="fa fa-trash pull-right delete"></i>
        <i className="fa fa-thumbs-down pull-right"></i>
        <i onClick={this.handleNewLike} className="fa fa-thumbs-up pull-right"></i>
        <div className="pull-right">{this.props.likes}</div>
      </li>
    )
  }
}
