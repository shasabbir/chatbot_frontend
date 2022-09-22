import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  var msgs=[{type:"b",msg:"Bye, see you"},{type:"u",msg:"Ok, thank you have a good day"},{type:"b",msg:"I am looking for your help"},{type:"u",msg:"You are welcome"},{type:"b",msg:"I am good too, thank you for your support"},{type:"u",msg:"Hi xyz i am good tnx how about you?"},{type:"b",msg:"Hi, how are you Sabbir?"}]
  //const [msgs, setmsgs] = useState([]);
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
            {msgs.map(({ msg,type}) => {
          return (
            <Message type={type} text={msg} />
          );
        })}


            </div>



            <div class="card-footer">
              <div class="input-group">
                <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                <div class="input-group-append">
                  <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
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
