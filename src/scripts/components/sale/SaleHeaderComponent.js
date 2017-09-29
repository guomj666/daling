
import Fetch from '../../modules/fetch'
import {Link} from 'React-Router'
class SaleHeaderComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={

        }
    }

    render(){
        return (
            <div className="saleHeader">
                <Link to="/section1" activeClassName="activeColor">今日约惠</Link>
                <Link to="/section2" activeClassName="activeColor">约惠预告</Link>
            </div>
           
        )
    }
     
    componentDidMount(){
      
    }
    componentDidUpdate(){
     
    }

}

export default SaleHeaderComponent
