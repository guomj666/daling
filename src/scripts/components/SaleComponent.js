
import SaleHeaderComponent from "./sale/SaleHeaderComponent"
import SaleSection1Component from "./sale/SaleSection1Component"
import SaleSection2Component from "./sale/SaleSection2Component"
import FooterComponent from "./FooterComponent"


// import DetailComponent from "./detail/DetailComponent"

class SaleComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
         
        }
    }

    componentWillMount(){
        
    }

    render(){
       
        return (
       
            <div className="SaleComponent">
                 <SaleHeaderComponent/>
                 {/* <SaleSection1Component/> */}
                 {/* {
                   this.state.isShow? <SaleSection2Component/>:<SaleSection1Component/>
                 } */}
              
                 {this.props.children}
            	<FooterComponent/>
             
        </div>
        )
    }

}

export default SaleComponent