

import Fetch from '../../modules/fetch'
class DetailComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            hot_search:{}
		
      
		}
	
    }

    getHotSearchWord(){
	
		console.log(this.props)
		// console.log(id) 
		let id=this.props.params.id
        let that = this
        let time=Date.now()
	//	http://touch.daling.com/api/goods/detail?goods_id=115846&_=1506255891197
        Fetch.Get(' http://localhost:9000/dl/api/goods/detail?',{
			goods_id:id,
            _:time
        }).then(res=>{return res.json()}).then(json=>{
            console.log(json.data)
            that.setState({hot_search:json.data})
        })
     

    }

    componentWillMount(){
		this.getHotSearchWord()
     
       
    }
    showHotWords(){
     
       
    }



   

    render(){
        
        // console.log(Info)
        return (
           
            <div className="detail_page">
                <div className="detailSectionBox">
                    <div className="detailSection">
                        <div><img src={this.state.hot_search.cover_image} className="cover_image"/></div>
                        <div className="goods_info_box">
                            <div className="goods_info">
                                <div className="goods_title_box">
                                    <div className="goods_title">{this.state.hot_search.goods_title}</div>
                                    <div className="goods_collect">
                                        <img src="/images/heart.png" className="img_heart"/>
                                        <span >{this.state.hot_search.wishes}</span>
                                    </div>
                                </div>
                               
                                <div className="goods_price">
                                    <div>
                                        <span className="price"><i>￥</i>{this.state.hot_search.price}</span>
                                       <span  className="price_tag">{this.state.hot_search.price_tag}</span>
                                        <span  className="price_now">{this.state.hot_search.country}现时售价
                                            <span  className="market_price">￥{this.state.hot_search.market_price}</span>
                                        </span>
                                       
                                        <span  className="price_quest">?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tax">税费：￥7.13</div>
                        </div>
                        <div className="buyBack"><span className="back">返</span>购买可获19达令币</div>
                        <div className="more_property">
                                <p>规格</p>
                                <button className="btn">2个装</button>
                                <button className="btn btn2">5对装</button>
                        </div>
                        <div></div>
                    </div>
                </div>
               
                <footer className="detailFooter">
                    <div className="iconfont icon-cart"></div>
                    <div className="cartBox">
                        <a href="#">加入购物车</a>
                        <a href="#" className="buyNow">立即购买</a>
                    </div>
                   
                </footer>
				
            </div>
           
        )
    }
     
    componentDidMount(){

    }
 

}

export default DetailComponent