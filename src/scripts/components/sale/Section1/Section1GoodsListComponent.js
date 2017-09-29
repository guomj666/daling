


import DetailComponent from '../../detail/DetailComponent'
import Fetch from '../../../modules/fetch'
class Section1GoodsListComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            hot_search:[]
            
      
        }
  
    }

    componentWillMount(){
       this. getHotSearchWord()

    }
    getHotSearchWord(){
        let that = this
        let time=Date.now()
     //  http://touch.daling.com/api/promotion/todayFlashGoods?page=1&_=1506148688489
        Fetch.Get(' http://localhost:9000/dl/api/promotion/todayFlashGoods?',{
            page:1,
            _:time
        }).then(res=>{return res.json()}).then(json=>{
            // console.log(json.data.flash_list[0].list.sale_type_info)
            
            that.setState({hot_search:json.data.flash_list[0].list})
          
          
        })
     

    }
   
    
    toTime(endtime,begintime){
        let obj = {
            // "天":1000*60*60*24,
            "时":1000*60*60,
            "分":1000*60
            // "秒":1000
        };
        
        let d = Number(endtime)-Number(begintime);
        // console.log(d)
        let str = "";
        for( var i in obj ){
            var s = parseInt(d/obj[i]);
            d = d%obj[i];
            str += s+i;
            // console.log(s,d)
        }
        return "约惠 还剩"+str;
    }
    
    
    showHotWords(){
        let that = this
        let arr = []
        // if(this.state.hot_search.length>2){
          
            this.state.hot_search.forEach((item,i)=>{
                let id=item.goods_id;     
//              console.log(item)
                let url='#/detail/'+id
                // console.log(url)
                arr.push(<div className="goodsBox">
                        <a href={url}><img src={item.cover_image} className="goods_img"/></a>
                        <p className="hot_p" ><img src={item.sale_type_info.big.img} className="hot_img"/></p>
                        <div>{item.goods_show_name}</div>
                        <div className="goods_show_desc">{item.short_goods_name}</div>
                        <div className="lastTime">{this.toTime(item.sales[0].pre_end_time,item.sales[0].pre_begin_time)}</div>
                        <div className="goods_price">
                            <span className="now_price"><i>￥</i>{item.price}</span>
                            <span className="old_price">￥{item.old_price}</span>
                        </div>
                        <div className="joinCart">
                            <div className="joinCart_left">
                                <p>{item.add_cart_num}</p>
                                <p>加入购物车</p>
                            </div>
                            <div className="iconfont icon-cart cartBox"></div>
                        </div>
                    </div>)
                   
            })
        // }
       
        return arr;
    }

    

    render(){
        return (
            <div>
                <div className="section1Goods">
                    {this.showHotWords()}
                   
                </div>
            </div>
        )
    }
     
    componentDidMount(){
    

     
    }
    componentDidUpdate(){

    }

}

export default Section1GoodsListComponent


