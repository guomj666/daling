
import store from '../../modules/redux/store'
import Fetch from "../../modules/fetch"

class FenleiComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        	fenlei_list:store.getState().fenlei_list
        }
    }
    
    //获取具体的分类
	getGoods(){
		let that = this
		//时间戳
		let time = new Date().getTime()
//		http://touch.daling.com/api/menu/getMenu?_=1506248055974
		Fetch.Get('http://localhost:9000/dl/api/menu/getMenu',{_:time}).then(res=>res.json()).then(json=>{
//			console.log(json.data[0].block_list[0].list)
			that.setState({fenlei_list:json.data[0].block_list})
		})
    }
	
	//具体分类
	showJTfenlei(){
		let Arr = [];
		let list = this.state.fenlei_list
		if(list){
			list.forEach((item,ind)=>{
				let _Arr = []
				item.list.forEach((item,ind)=>{
					let hash = ""
					for(var key in item.extra ){
						hash += "&" + key + "=" + item.extra[key]
					}
					hash = hash.slice(1)
					hash = "#/list/" + hash
//					console.log(hash)
					_Arr.push(
						<li>
							<a href={hash}>
		                        <img src={item.category_img_url}/>
		                        <p>{item.alt}</p>
		                    </a>
						</li>
					)
				})
				Arr.push(
					<div className="fenlei_box">
						<div className="fenlei_table">
							{item.title=="其它"?"":<h4 className="fenlei_title">{item.title}</h4>}
							<ul>{_Arr}</ul>
						</div>
					</div>
				)
			})
			return Arr;
		}
	}
	
	
	componentWillMount(){
        this.getGoods()
    }
	
	render(){
		return (
			<div className="JTfenlei">
				{this.showJTfenlei()}
			</div>
		)
	}  
	
	
	componentDidMount(){
		let that = this
		store.subscribe(()=>{
//			console.log('6.store的subscribe方法里的回调执行(回调是一个监听函数，一旦state发生变化，就自动执行这个回调函数)，view获取最新的状态')
			that.setState({
				fenlei_list:store.getState().fenlei_list
			}) 
		})
	}
}

//定义默认属性
//RootComponent.defaultProps={
//	this.state.fenlei({
//		
//	})
//}

export default FenleiComponent

//http://touch.daling.com/api/goods/search?app_from_page=search&sort=default&size=20&page=1&tags=%E6%B5%B7%E5%A4%96%E7%9B%B4%E9%82%AE%E5%9B%BD%E9%99%85&is_recommend=1&id=1116&key=app_menu_more&_=150660834605
//
//http://localhost:9000/dl/api/goods/search?_=tags=%E6%B5%B7%E5%A4%96%E7%9B%B4%E9%82%AE%E5%9B%BD%E9%99%85&is_recommend=1&id=1116&key=app_menu_more?_=1506608339849
//
//
//http://touch.daling.com/api/goods/search?app_from_page=search&sort=default&size=20&page=1&tags=%E6%9E%81%E8%87%B4%E7%BE%8E%E6%8A%A4&is_recommend=1&id=929&key=app_menu_more&_=1506608505274















