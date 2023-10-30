import "../../App.css";
import {MessageType, messages} from "../../data/messages"; 
import Message from "../Message/Message";
import Response from "../Response/Response";
import Typing from "../Typing/Typing";

interface Props {
  list: MessageType[];
}

const MessageHistory = ({ list }: Props) => {
if (list.length === 0) {
    return (<></>)
} else { 
    return (
        <ul>
            {messages.map((message) => {
                if (message.type === 'message') {
                    return <Message from={message.from.name} message={message} key={message.id} />
                } else if (message.type === 'response') {
                    return <Response from={message.from.name} message={message} key={message.id} />
                } else if (message.type === 'typing') {
                    return <Typing from={message.from.name} message={message} key={message.id} />
                }
                return false;
            })}
        </ul>
    )
};
};

export default MessageHistory;
