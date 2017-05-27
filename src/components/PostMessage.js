import React, { Component } from 'react';

export default class PostMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newMessage: ''
    }
    this.createNewMessage = this.createNewMessage.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    // <textarea onChange={e => this.handleMessageChange(e)} might be nicer
  }

  createNewMessage() {
    const msgLength = this.state.newMessage.length
    if (msgLength < 1) {
      alert('You did not enter a message!')
    } else {
      this.props.onNewMessage(this.state.newMessage)
    }
    this.setState({ newMessage: '' })
  }

  handleMessageChange(e) {
    //this.props.onNewMessage(this.state.msg)
    this.setState({
      newMessage: e.target.value
    })
  }

  render() {
    return(
        <div className="panel-group">
          <div className="panel panel-primary">
            <div className="panel-heading">Post a message</div>
            <div className="panel-body">
              <div className="form-group">
                <label>Message:</label>
                {/* Changed the below to set the value of the textarea to be the value of the current state, allowing the clear it.
                  <textarea onChange={this.handleMessageChange} id="message" type="text" className="form-control" placeholder="Enter a message">
                  {this.state.newMessage}
                </textarea> */}
                <textarea onChange={this.handleMessageChange} id="message" type="text" className="form-control" placeholder="Enter a message" value={this.state.newMessage}>
                </textarea>
              </div>
              <button onClick={this.createNewMessage} id="submit" className="btn btn-default">Post to board</button>
            </div>
          </div>
        </div>
    )
  }
}
