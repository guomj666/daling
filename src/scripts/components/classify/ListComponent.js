

import HeaderSearchComponent from "../main/HeaderSearchComponent"
import Fetch from "../../modules/fetch"

class Section2GoodsListComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            List_data:[]
        }
    }

    componentWillMount(){
       this.getHotSearchWord()
    }
    
    getHotSearchWord(){
		let _str = this.props.params.str
		let that = this
		let time = new Date().getTime()
		time = "?_="+time
		let str = "app_from_page:search&sort:default&size:20&page:1&" + _str + time
		console.log(str)
		
		//app_from_page:search&sort:default&size:20&page:1
		
		//http://touch.daling.com/api/goods/search?app_from_page=search&sort=default&size=20&page=1&tags=%E5%88%9B%E6%84%8F%E7%94%9F%E6%B4%BB&is_recommend=1&id=931&key=app_menu_more&_=1506602437325
		Fetch.Get('http://localhost:9000/dl/api/goods/search',{_:str}).then(res=>res.json()).then(json=>{
			console.log(json.data.list)
			that.setState({List_data:json.data.list})
		})
    }
   
    showHotWords(){
        let that = this
        let arr = []
        console.log(this.state.List_data)
        let list = this.state.List_data
        if(list){
        	list.forEach((item,i)=>{
	            arr.push(
		            <div className="goodsBox">
		               <a href="/detail.html"><img src={item.cover_image} className="goods_img"/></a>
		               <div className="goodsContentBox">
		                   <p className="goods_show_name">{item.title_desc}</p>
		                   <p className="goods_show_desc">{item.goods_name}</p>
		                   <div className="priceCart">
		                       <div className="priceBox">
		                           <p className="now_price">￥{item.price}</p>
		                            <span className="good_cart"></span>
		                       </div>
		                        <div className="cartBox">
		                            <a href="#" className="iconfont icon-cart"></a>
		                        </div>
		                   </div>
		               </div>
		               <div className="add_cart_num">{item.add_cart_num}人已加入购物车</div>
		            </div>
	            )
        	})
        }
        
        return arr;
    }

    render(){
        return (
            <div className="big-box">
            	<HeaderSearchComponent/>
            	{this.showHotWords()}
            </div>
        )
    }
	
	
	
}

export default Section2GoodsListComponent


