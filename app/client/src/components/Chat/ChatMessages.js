export class ChatMessage {
    render() {
        return (
             <li> {JSON.stringify(this.props.data)}</li>
        )}
}
export default ChatMessage;