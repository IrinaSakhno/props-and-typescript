import './App.css';
import MessageHistory from './components/MessageHistory/MessageHistory';
import {messages} from './data/messages';

function App() {
  return (
    <div className="chat">
      <MessageHistory list={messages || []} />
    </div>
  );
}

export default App;