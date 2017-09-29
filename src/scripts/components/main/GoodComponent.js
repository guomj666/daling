
import TimeComponent from "./TimeComponent"
import formatTime from "../../modules/main"
import Fetch from "../../modules/fetch"

class GoodComponent extends React.Component {
	
    constructor(props,context){
        super(props,context)
        this.state={
        	dafanchang:{},
			huodong:{},
			dalingxinxuan:{},
			jinrixinpin:{},
			rexiao:{}
        }
    }
	
    componentWillMount(){
        this.getGoods()
    }
    
    //获取图片的url
    getStyle(imageUrl) {
    	let divStyle = {
    		backgroundImage: "url("+imageUrl+")"
    	}
    	return divStyle;
    }

	
	
	//季节大返场
	dafanchang(){
		let Arr = []
		let that = this
		Arr.push(
			<div className="title">
		        <p className="label_left"></p>
		        <div className="label">{this.state.dafanchang.txt}</div>
		        <p className="label_right"></p>
		    </div>
		)
		let list = this.state.dafanchang.list
		if(list){
			list.forEach((item,ind)=>{
				Arr.push(
					<div className="good-box">
						<a href={item.list[0].url}>
	                        <div style={that.getStyle(item.list[0].cover)} className="active-img-top"></div>
	                    </a>
	                    <TimeComponent/>
					</div>
				)
			})
		}
		return Arr
	}
	
	
	//进行的活动
	huodong(){
		let Arr = []
		let that = this
		Arr.push(
			<div className="title">
		        <p className="label_left"></p>
		        <div className="label">{this.state.huodong.txt}</div>
		        <p className="label_right"></p>
		    </div>
		)
		let list = this.state.huodong.list
		if(list){
			list.forEach((item,ind)=>{
				Arr.push(
					<div className="good-box">
						<a href={item.list[0].url}>
	                        <div style={that.getStyle(item.list[0].cover)} className="active-img-top"></div>
	                    </a>
	                    <TimeComponent/>
					</div>
				)
			})
		}
		
		return Arr
	}
	
	//达令心选
	dalingxinxuan(){
		let Arr = []
		let that = this
		let list = this.state.dalingxinxuan.list
		Arr.push(
			<div className="title">
		        <p className="label_left"></p>
		        <div className="label">{this.state.dalingxinxuan.txt}</div>
		        <p className="label_right"></p>
		    </div>
		)
		if(list){
			list.forEach((item,ind)=>{
				Arr.push(
					<div className="good-box">
						<a href={item.list.url}>
	                        <div style={that.getStyle(item.list[0].cover)} className="active-img-top"></div>
	                    </a>
	                    <TimeComponent/>
					</div>
				)
			})
		}
		return Arr
	}
	
	
	//今日新品
	jinrixinpin(){
		let Arr = []
		let that = this
		let list = this.state.jinrixinpin.list
		Arr.push(
			<div className="title">
		        <p className="label_left"></p>
		        <div className="label">{this.state.jinrixinpin.txt}</div>
		        <p className="label_right"></p>
		    </div>
		)
		if(list){
			list.forEach((item,ind)=>{
				if(item.display_type=="category_window"){
					let list1 = item.list
					list1.forEach((item,ind)=>{
						Arr.push(
							<div className={that.tagClass("NewGoods-box",ind)}>
								<div className="today-txt-div">
	                                  <p className="today-name">{item.title}</p>
	                                  <p className={that.tagClass("today-num",ind)}>
	                                    {item.count_txt}
	                                    <span className={that.tagClass("today-icon-right",ind)}></span>
	                                  </p>
	                            </div>
                                <div style={that.getStyle(item.cover)} className="NewGoods"></div>
                            </div>
						)
					})
				}else if(item.display_type=="window"){
//					Arr.push(
//						<a><div className="one-four-div">
//						<div class="one-four-top">
//	                  		<div class="one-four-line left-line"></div>
//	                  		<div class="i-icon-right arrow-img"></div>
//                			<div class="one-four-line right-line"></div>
//              		</div>
//              	)
//					let imgs = item.images
//					imgs.forEach((item,ind)=>{
//						Arr.push(
//							
//						)
//					})
				}else{
					Arr.push(
						<div className="good-block good-box">
							<a href={item.group_id}>
		                        <div style={that.getStyle(item.cover_image)} className="active-img-top"></div>
		                        <div className="goods-title">{item.goods_show_name}</div>
		                        <div className="goods-desc">{item.goods_show_desc}</div>
		                        <div className="goods-price">
                                    <i className="icon-price"></i>
                                    <span className="goods-price-number">259.00</span>
                                </div>
		                    </a>
		                    <div className="cart-btn u-btn-s" data-goods-id="226030" data-goods-num="1320">

                                <div className="cart-btn-desc">
                                    <div className="car-num">1320人</div>
                                    <div>加入购物车</div>
                                </div>
                                <div className="icon-car">
                                    <div className="goods-cart">
                                    </div>
                                </div>
                            </div>
						</div>
					)
				}
			})
		}	
		return Arr
	}
	
	//获取类名的方法
	tagClass(str,i){
		let classStr = str+" "+str+i
		return classStr
	}
	
	//热销
	rexiao(){
		let Arr = []
		let that = this
		let list = this.state.rexiao.list
		Arr.push(
			<div className="title">
		        <p className="label_left"></p>
		        <div className="label">{this.state.rexiao.txt}</div>
		        <p className="label_right"></p>
		    </div>
		)
		if(list){
			list.forEach((item,ind)=>{
				Arr.push(
					<div className="good-box">
						<a href={item.group_id}>
	                        <div style={that.getStyle(item.cover_image)} className="active-img-top"></div>
	                    </a>
	                    <TimeComponent/>
					</div>
				)
			})
		}
		return Arr
	}
	
	//猜你喜欢
	
	
	
	
	//获取商品方法
	getGoods(){
		let that = this
		let dafanchang = {}
		let huodong = {}
		let dalingxinxuan = {}
		let jinrixinpin = {}
		let rexiao = {}
		//时间戳
		let time = new Date().getTime()
		Fetch.Get('http://localhost:9000/dl/api/index/index',{_:time}).then(res=>res.json()).then(json=>{
			//console.log(json.data.complex[0].list)
			json.data.complex.forEach((item,ind)=>{
				if(item.icon == "http://img.cdn.daling.com/data/files/mobile/2015/03/05/14255500631667.png"){
					//Object.assign(dafanchang,item)
					that.setState({dafanchang:item})
				}
				if(item.icon == "http://img.cdn.daling.com/data/files/mobile/2015/05/12/14314195284366.png"){
					that.setState({huodong:item})
				}
				if(item.icon == "http://img.cdn.daling.com/data/files/mobile/2017/07/24/15008896171560.png"){
					that.setState({dalingxinxuan:item})
				}
				if(item.icon == "http://img.cdn.daling.com/data/files/mobile/2015/05/06/1430881388217.png"){
					that.setState({jinrixinpin:item})
				}
				if(item.icon == "http://img.cdn.daling.com/data/files/mobile/2015/05/06/14308791317068.png"){
					that.setState({rexiao:item})
				}
				if(item.icon == "http://img.cdn.daling.com/data/files/mobile/2015/05/06/14308791317068.png"){
					that.setState({cainixihuan:item})
				}
			})
		})
    }
	
	//渲染函数
    render(){
        return (
            <div>
            	{this.dafanchang()}
            	{this.huodong()}
            	{this.dalingxinxuan()}
            	{this.jinrixinpin()}
            	{this.rexiao()}
            </div>
        )
    }
    
    


}





export default GoodComponent