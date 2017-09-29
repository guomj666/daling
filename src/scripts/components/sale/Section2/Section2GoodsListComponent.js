


import Fetch from '../../../modules/fetch'
class Section2GoodsListComponent extends React.Component {

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
     //  http://touch.daling.com/api/promotion/todayFlashGoodsForenotice?_=1506218575203
        Fetch.Get(' http://localhost:9000/dl/api/promotion/todayFlashGoodsForenotice?',{
            _:time
        }).then(res=>{return res.json()}).then(json=>{
            // console.log(json.data.flash_list[0].list)
            
            that.setState({hot_search:json.data.flash_list[0].list})
            // console.log(json.data.flash_list[0].list[1].icons[0].big.img)
            
          
        })
     

    }
   
    
    // toTime(endtime,begintime){
    //     let obj = {
    //         // "天":1000*60*60*24,
    //         "时":1000*60*60,
    //         "分":1000*60
    //         // "秒":1000
    //     }
        
    //     let d = Number(endtime)-Number(begintime);
    //     console.log(d)
    //     let str = "";
    //     for( var i in obj ){
    //         var s = parseInt(d/obj[i]);
    //         d = d%obj[i];
    //         str += s+i;
    //         console.log(s,d)
    //     }
    //     return "约惠 还剩"+str;
    // }
    PageTo(path){
        location.href=path
    }
    
    showHotWords(){
        let that = this
        let arr = []
        this.state.hot_search.forEach((item,i)=>{
            // console.log(item.icons?i:2)
            // // var a;
            // item.icons?:""
            arr.push(
          
            <div className="goodsBox">
               <a href="/detail.html"><img src={item.cover_image} className="goods_img"/></a>
               <div className="goodsContentBox">
                   <p className="goods_show_name">{item.goods_show_name}</p>
                   <p className="goods_show_desc">{item.goods_show_desc}</p>
                   <div className="priceCart">
                       <div className="priceBox">
                           <p className="now_price">￥{item.price}</p>
                            <span className="old_price">{item.old_price}</span>
                       </div>
                        <div className="cartBox">
                            <a href="#" className="iconfont icon-cart"></a>
                        </div>
                   </div>
                  
               </div>
               <div className="add_cart_num">{item.add_cart_num}人已加入购物车</div>
              {/* <p><img src={item.icons[i].big.img}/></p> */}
            </div>
           
         
                    )
               
        })
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

export default Section2GoodsListComponent


