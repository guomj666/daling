


import Fetch from '../../../modules/fetch'
class Section1BuyComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            hot_search:""
      
      
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
//          console.log(json.data.flash_list[0])
            that.setState({hot_search:json.data.flash_list[0]})
        })
     

    }

    render(){
        return (
            <div>
                <div className="section1Buy">
                    <div>
                        <img src={this.state.hot_search.icon}/>
                    </div>
                    <div>{this.state.hot_search.txt}</div>

                </div>
            </div>
        )
    }
     
    componentDidMount(){
    

     
    }
    componentDidUpdate(){

    }

}

export default Section1BuyComponent


