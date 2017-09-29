



import Fetch from '../../modules/fetch'
class HeaderAutumnComponent extends React.Component {

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
            console.log(json.data.index_select_range)
            that.setState({hot_search:json.data.index_select_range})
        })
     

    }
  

    componentWillMount(){
        this.getHotSearchWord()
    }
    showHotWords(){
        let that = this
        let arr = []
        this.state.hot_search.forEach((item,i)=>{
            arr.push(<li className="bannerAutumn"><a href="#"><img src={item.cover}/></a></li>)
                     
        })
        return arr;
    }
    render(){
        return (
            <div className="header_autumn">
                <ul className="header_autumn_img">
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

export default HeaderAutumnComponent


