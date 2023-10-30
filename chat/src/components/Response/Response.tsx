import "../../App.css";
import { SenderInfo, MessageType } from "../../data/messages";

interface Props {
  from: SenderInfo & any;
  message: MessageType & any;
}

const Response = ({ from, message }: Props) => {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from} </span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  );
};

export default Response;
