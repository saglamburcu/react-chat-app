import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import "../App.css";

function Container() {

  return (
    <div className="container">
      <ChatList />
      <ChatForm />
    </div>
  )
};

export default Container;