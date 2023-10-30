import "../../App.css";
import { SenderInfo, MessageType } from "../../data/messages";

interface Props {
  from: SenderInfo & any;
  message: MessageType & any;
}

const Typing = ({ from, message }: Props) => {
  return (
    <li >
      <div className="message-data">Ï
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">
      <i className="fa fa-circle me"></i><i className="fa fa-circle me"></i><i className="fa fa-circle me"></i>
      </div>
    </li>
  );
};

export default Typing;
