import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserDetails, Welcome , GameFrame, Chat} from '../../components';
import useServer from "./../../ServerConnection";
import {Button, Form} from "react-bootstrap";


export class Home extends Component {
  render() {
    const {id} = useServer(this.props.name, this.props.roomName)

    const [text, setText] = useServer.apply.useState("Hello");
    const handleChange = (event) => setText(event.target.value);

    const {sendMessage, messageList} = useServer(this.props.username, id)


    function handleSubmit(event) {
        event.preventDefault()

        sendMessage(text)
        setText("")
    }



    return (
      <div className="row">
        <div className="rightPanel">
          <Welcome user={this.props.profile} />
          <UserDetails user={this.props.profile} />
          <GameFrame />
          <Chat messages={messageList}/>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Chat</Form.Label>
                <Form.Control type="text" placeholder="Enter your message" onChange={handleChange}
                              value={text}/>
                <Form.Text className="text-muted">
                    somthing to say
                </Form.Text>
            </Form.Group>
            <Button type="submit">Post</Button>
        </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(Home);
