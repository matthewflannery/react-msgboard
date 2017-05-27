import React, { Component } from 'react';
import Header from './Header';
import PostMessage from './PostMessage';
import MessageBoard from './MessageBoard';
import Message from './Message';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages:
      [
        { text: 'Hi mum', likes: 8 }
      ]
    }
    this.handleNewMessage = this.handleNewMessage.bind(this)

  }

  handleNewMessage(text) {
    const message = { text: text, likes: 0}
    this.setState({
      messages: this.state.messages.concat(message)
    })
  }

  render() {
    return(
      <div>
        <Header>
          Anon Message Board
        </Header>
        <div className="container">
          <PostMessage onNewMessage={this.handleNewMessage} />
          <MessageBoard>
            {this.state.messages.map(message => (
              <Message likes={message.likes}>
                {message.text}
              </Message>
            ))}
          </MessageBoard>
        </div>
      </div>
    )
  }
}
