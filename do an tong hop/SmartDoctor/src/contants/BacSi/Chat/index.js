import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Messages extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Chào bạn,bác sĩ có thể giúp được gì cho bạns',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Bs.Nguyễn Trương Thanh Nhã',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}