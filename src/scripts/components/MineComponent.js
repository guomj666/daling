

class MineComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            arr:["http://img.daling.com/captcha/image/a00bb744362240d39726669ed775719a.png","http://img.daling.com/captcha/image/6be18d310c6a4a71ac49800a4db38cd5.png",
            "http://img.daling.com/captcha/image/068273881b6b40e7b52f84b2b664673d.png","http://img.daling.com/captcha/image/7a4ee4561e264874842f15250245af14.png"],
            url:''
        }
    }


    componentWillMount(){
      
    }
    FreshCode(){
       this.setState.url=this.state.arr[Math.floor(Math.random()*4)];
  
    } 
    render(){
       
        return (
            <div>
                <form>
                    <div className="mine">
                        <input type="text" placeholder="请输入手机号" className="phoneNum"/>
                        <div className="picCodeBox">
                                <input type="text" placeholder="请输入图形验证码"  className="picCode"/>
                                <div className="numShow">
                                    <img onClick={this.FreshCode()} src={this.setState.url} className="numShowPic"/>
                                </div>
                        </div>
                        <div className="messageCodeBox">
                                <input type="text" placeholder="请输入短信验证码" className="messageCode"/>
                                <button className="btn_mess">获取短信验证码</button>
                        </div>
                        
                        <button className="login">登录</button>
                    </div>
                </form>
                <div className="logo_img_box">
                    <img src="http://img.daling.com/assets/web-auth/logo.e8155d.png" className="logo_img" />
                </div> 
            </div>
             )
      
    }

}

export default MineComponent