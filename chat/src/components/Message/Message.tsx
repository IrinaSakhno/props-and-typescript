import "../../App.css";
import { SenderInfo, MessageType } from "../../data/messages";

interface Props {
  from: SenderInfo & any;
  message: MessageType & any;
}

const Message = ({ from, message }: Props) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
};

export default Message;
