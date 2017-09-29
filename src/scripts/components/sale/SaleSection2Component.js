
import Fetch from '../../modules/fetch'
import Section2BuyComponent from './Section2/Section2BuyComponent'
import Section2GoodsListComponent from './Section2/Section2GoodsListComponent'
class SaleSection2Component extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            hot_search:[]       //需要先设置状态
           
      
        }
    }

    render(){
        return (
            <div className="saleSection2">
               <Section2BuyComponent/>
               <Section2GoodsListComponent/>
            </div>
           
        )
    }
     
    componentDidMount(){
      
    }
    componentDidUpdate(){
     
    }

}

export default SaleSection2Component
