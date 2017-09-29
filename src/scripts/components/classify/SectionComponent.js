
import store from '../../modules/redux/store'
import actions from '../../modules/redux/actions'
import FenleiComponent from "./FenleiComponent"
import Fetch from "../../modules/fetch"


class SectionComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
          	fenlei:[],
          	fenlei_list:store.getState().fenlei_list
        }
    }
    
    //获取分类的方法
	getGoods(){
		let that = this
		let time = new Date().getTime()//时间戳
		let arr = []
		//http://touch.daling.com/api/menu/getMenu?_=1506248055974
		Fetch.Get('http://localhost:9000/dl/api/menu/getMenu',{_:time}).then(res=>res.json()).then(json=>{
//			console.log(json.data)
			json.data.forEach((item,ind)=>{
				arr.push(item.alt)
			})
			that.setState({fenlei:arr})
//			console.log(this.state.fenlei)
		})
    }

	
	//分类栏
	showfenlei(){
		let Arr = [];
		let that = this;
//		let arr = ['TUIJIAN','JIZHI','QUANQIU','JIANHUO','CHUANGYI','SHISHANG','PINPAI']
		let arr = this.state.fenlei
//		console.log(this.state.fenlei)
		arr.forEach((item,ind)=>{
			if(arr.length>2){
	//			console.log(this.state.fenlei)
//				console.log("3、用户操作")
				Arr.push(
					<p className="fenleilan-list" onClick={actions.changeFenLei.bind(this,item)}>{item}</p>
				)
			}
		
		})
		return Arr;
	}

	componentWillMount(){
        this.getGoods()
    }
	
	render(){
		return (
			<div className="classifySection">
				<div className="fenleilan">
					{this.showfenlei()}
				</div>
				<div className="fenleiContent">
					<FenleiComponent/>
				</div>
			</div>
		)
	}
	
 
    
}

export default SectionComponent