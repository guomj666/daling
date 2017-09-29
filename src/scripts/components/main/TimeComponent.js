
import formatTime from "../../modules/main"
import Fetch from "../../modules/fetch"

class TimeComponent extends React.Component {
	
    constructor(props,context){
        super(props,context)
        this.state={
            //闪购数据
            endTime:[]
        }
    }
	
    componentWillMount(){
        this.getGoods()
    }
    
	//获取时间
	getGoods(){
		let that = this
		//时间戳
		let time = new Date().getTime()
		Fetch.Get("http://localhost:9000/dl/api/index/index",{_:time}).then(res=>res.json()).then(json=>{
			//今日上新  商品的截止时间
//			console.log(json.data.complex[0].end_time)
			that.setState({endTime:json.data.complex[0].end_time})
		})
   	}
	
    render(){
        return (
            <div className="bottom-time">
                <div className="label">
                	<span className="time_icon"></span>
                	{formatTime.toTime(this.state.endTime)}
                </div>
            </div>
        )
    }

}





export default TimeComponent