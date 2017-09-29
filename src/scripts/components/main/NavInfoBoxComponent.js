



import Fetch from '../../modules/fetch'
class NavInfoBoxComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            hot_search:[],       //需要先设置状态
            isShow:true
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
            i==0?arr.push(<li><a href="#"><img src={item.img_title} className="activeImg"/></a></li>)
                :arr.push(<li><a href="#">{item.title}</a></li>)        
        })
        return arr;
    }



    

    render(){
        return (
                <div>
                    {
                        this.state.isShow? <ul className="navBox">
                            {this.showHotWords()}
                        </ul>:""
                    }
                </div>
           
         
               
               
         
           
        )
    }
     
    componentDidMount(){
      
    }
    componentDidUpdate(){
       
    }

}

export default NavInfoBoxComponent


