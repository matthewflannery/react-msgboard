import React, { Component } from 'react';


// Header
export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <h1>Anon Message Board</h1>
    )
  }
}

export default class PostMessage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return blah
  }
}

export default class MessageBoard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return blah
    // Has children: Messages inside of it which have properties likes and text (Maybe text should be a child of Messages though)
  }
}

<App>
  <Header>
    Anon Message Board
  </Header>
  <PostMessage/>
  <MessageBoard>
    <Message>
      <Text />
    </Message>
  </MessageBoard>
</App>
