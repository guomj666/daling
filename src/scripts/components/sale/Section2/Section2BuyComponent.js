


import Fetch from '../../../modules/fetch'
class Section2BuyComponent extends React.Component {

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
     // http://touch.daling.com/api/promotion/todayFlashGoodsForenotice?_=1506172611697
        Fetch.Get(' http://localhost:9000/dl/api/promotion/todayFlashGoodsForenotice?',{
           
            _:time
        }).then(res=>{return res.json()}).then(json=>{
            // console.log(json.data.flash_list[0])
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

export default Section2BuyComponent


