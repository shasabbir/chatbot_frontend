import logo from './logo.svg';
import './App.css';
import Message from './Message';
import { useState, useEffect } from "react"
import axios from "axios";
function App() {
  var Send=()=>{
var data={type:"u",msg:document.querySelector("#root > div > div > div > div > div > div.card-footer > div > textarea").value};
document.querySelector("#root > div > div > div > div > div > div.card-footer > div > textarea").value="";
settyping(true);
var cc = msgs;
cc.unshift(data);
setmsgs([...cc]);
console.log(msgs);
axios.post("http://127.0.0.1:8000/api/test",{text:data.msg}).then(rsp => {
  var cc = msgs;
  cc.unshift({type:"b",msg:rsp.data.text});
  setmsgs([...cc]);
  settyping(false);
  console.log(msgs);

}).catch(err => {

})
  }
  //var msgs=;
  const [msgs, setmsgs] = useState([{type:"b",msg:"Bye, see you"},{type:"u",msg:"Ok, thank you have a good day"},{type:"b",msg:"I am looking for your help"},{type:"u",msg:"You are welcome"},{type:"b",msg:"I am good too, thank you for your support"},{type:"u",msg:"Hi xyz i am good tnx how about you?"},{type:"b",msg:"Hi, how are you Sabbir?"}]);
  const [typing, settyping] = useState(false);
  return (
    <div className="App">
      <br/><br/><br/><br/>
      <div class="container-fluid h-100">
      <div class="row justify-content-center h-100">
        
        <div class="col-md-8 col-xl-6 chat">
          <div class="card">
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img"/>
                  <span class="online_icon"></span>
                </div>
                <div class="user_info">
                  <span>HealthBot</span>
                  <p>feel free to talk with me</p>
                </div>
                
              </div>
              <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
              <div class="action_menu">
                <ul>
                  <li><i class="fas fa-user-circle"></i>  About us</li>
                  <li><i class="fas fa-users"></i> More about bert</li>
                  <li><i class="fas fa-plus"></i> Donate us</li>
                  <li><i class="fas fa-ban"></i>Exit</li>
                </ul>
              </div>
            </div>
            <div class="card-body msg_card_body">
            {msgs.map((item,index) => {
          return (
            <Message key={index} type={item.type} text={item.msg} />
          );
        })}
        


            </div>

            {(() => {
      if (typing) {
        return (
            <img src="https://i.pinimg.com/originals/6b/48/af/6b48af2e74f452064868ac2e8d466e7f.gif" class="rounded-circle user_img"/>
            )

      }
    })()}
            <div class="card-footer">
              <div class="input-group">
                <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                <div class="input-group-append">
                  <span class="input-group-text send_btn" onClick={Send}><i class="fas fa-location-arrow"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
