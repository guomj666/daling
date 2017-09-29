



import Fetch from '../../modules/fetch'
class HeaderNavComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            hot_search:[],       //需要先设置状态
            swiper:null
      
        }
    }

    getHotSearchWord(){
        let that = this
        let time=Date.now()
     //   http://touch.daling.com/api/menu/homeChannel?_=1505916351719
        Fetch.Get(' http://localhost:9000/dl/api/menu/homeChannel?',{

            _:time
        }).then(res=>{return res.json()}).then(json=>{
            console.log(json.data)
            that.setState({hot_search:json.data})
        })
     

    }

    componentWillMount(){
        // alert()
        this.getHotSearchWord()
    }
    showHotWords(){
        let that = this
        let arr = []
        // console.log(this.state.hot_search)
        this.state.hot_search.forEach((item,i)=>{
            i==0?arr.push(<div className="swiper-slide"><a href="#"><img src={item.img_title} className="activeImg"/></a></div>)
                :arr.push(<div className="swiper-slide"><a href="#">{item.title}</a></div>)        
        })
        return arr;
    }



    

    render(){
        return (
            <div className="waimai-header">
                
                <div className="swiper-container HeaderNavBox">
                    <div className="swiper-wrapper items">
                        {this.showHotWords()}
                        　
                    </div>
                    <div className="swiper-scrollbar"></div>
                </div>
                {/* 下拉部分 */}
                <div className="downSlideSection"></div>

            </div>
           
        )
    }
     
    componentDidMount(){
        this.state.swiper=new Swiper(".HeaderNavBox",{
            freeMode : false,
            slidesPerView : 'auto',
            // freeModeSticky : true ,
            scrollbarHide:true,
            　scrollbar: '.swiper-scrollbar',

        })
    }
    componentDidUpdate(){
        this.state.swiper.update()
    }

}

export default HeaderNavComponent


