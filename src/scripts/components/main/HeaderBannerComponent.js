



import Fetch from '../../modules/fetch'
class HeaderBannerComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            hot_search:[]    //需要先设置状态
            
        }
    }

    getHotSearchWord(){
        let that = this
        let time=Date.now()
     //  http://touch.daling.com/api/index/index?_=1506046238459
        Fetch.Get(' http://localhost:9000/dl/api/index/index?',{

            _:time
        }).then(res=>{return res.json()}).then(json=>{
            console.log(json.data.activity_list)
            that.setState({hot_search:json.data.activity_list})
        })
     

    }
  

    componentWillMount(){
        this.getHotSearchWord()
    }
    showHotWords(){
        let that = this
        let arr = []
        // console.log(this.state.hot_search)
        this.state.hot_search.forEach((item,i)=>{
            arr.push(<li className="bannerImg"><a href="#"><img src={item.cover}  className="img"/></a></li>)
                     
        })
        return arr;
    }
    render(){
        return (
            <div className="header_banner">
                <ul>
                     {this.showHotWords()}
                </ul>
            </div>
           
        )
    }
     
    componentDidMount(){
      
    }
    componentDidUpdate(){

    }

}

export default HeaderBannerComponent


