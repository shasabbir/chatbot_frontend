
import './App.css';

function UserMessage(props) {
  return (
    <div class="d-flex justify-content-end mb-4">
                <div class="msg_cotainer_send">
                {props.text}
                </div>
                
              </div>
  );
}

export default UserMessage;
