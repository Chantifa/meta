import ChatMessage from "/ChatMessage";
import React, { Component } from 'react';

export class Chat extends Component {
    render() {
        return (
     <ol>
        {this.props.messages.map((data, key) => <ChatMessage key={key} data={data}/>)}
    </ol>
        )
}
}

export default Chat;
