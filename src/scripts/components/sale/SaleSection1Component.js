
// import Fetch from '../../modules/fetch'
import Section1BuyComponent from './Section1/Section1BuyComponent'
import Section1GoodsListComponent from './Section1/Section1GoodsListComponent'
class SaleSection1Component extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
     
        }
    }
  

    render(){
        return (
          
                <div className="saleSection1">
                <Section1BuyComponent/>
                <Section1GoodsListComponent/>
                </div>
       
           
        )
    }
     
    componentDidMount(){
      
    }
    componentDidUpdate(){
     
    }

}

export default SaleSection1Component
