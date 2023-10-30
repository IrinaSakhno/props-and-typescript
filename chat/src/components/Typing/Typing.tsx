import "../../App.css";
import { SenderInfo, MessageType } from "../../data/messages";

interface Props {
  from: SenderInfo & any;
  message: MessageType & any;
}

const Typing = ({ from, message }: Props) => {
  return (
    <li >
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="">
      <i className="fa fa-circle online"></i><i className="fa fa-circle me middle-circle"></i><i className="fa fa-circle me last-circle"></i>
      </div>
    </li>
  );
};

export default Typing;
