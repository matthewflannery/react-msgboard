import React, { Component } from 'react';
import Header from './Header';
import PostMessage from './PostMessage';
import MessageBoard from './MessageBoard';
import Message from './Message';
import { remove } from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        {
          text: 'Hi mum',
          likes: 8
        }
      ]
    }

    this.handleNewMessage = this.handleNewMessage.bind(this)
  }

  handleNewMessage(text) {
    const message = { text, likes: 0 }

    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  handleLikes(index, direction) {
    const messages = this.state.messages

    direction ? messages[index].likes += 1 : messages[index].likes -= 1;
    this.setState({ messages })
  }

  removeMessage(index) {
    const msgs = this.state.messages
    const messages = remove(msgs, msg => msg !== msgs[index])

    this.setState({ messages })
  }

  // <Message likes={message.likes}>
  render() {
    return(
      <div>
        <Header>
          Anon Message Board
        </Header>
        <div className="container">
          <PostMessage onNewMessage={this.handleNewMessage} />
          <MessageBoard>
            {this.state.messages.map((message, index) => (
              <Message likes={message.likes} key={index} onNewLike={direction => this.handleLikes(index, direction)} onRemove={() => this.removeMessage(index)} >
                {message.text}
              </Message>
            ))}
          </MessageBoard>
        </div>
      </div>
    )
  }
}
