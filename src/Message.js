
import './App.css';

function BotMessage(props) {
  return (
    <div>
    {(() => {
      if (props.type=="b") {
        return (
          <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"/>
                </div>
                <div class="msg_cotainer">
                  {props.text}
                </div>
              </div>
        )


      } else {
        return (
          <div key={props.key} class="d-flex justify-content-end mb-4">
                <div class="msg_cotainer_send">
                {props.text}
                </div>
                
              </div>
        )

      }
    })()}
    
    </div>          
  );
}

export default BotMessage;
