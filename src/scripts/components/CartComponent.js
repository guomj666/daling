
import SectionComponent from "./cart/SectionComponent"
import HeaderComponent from "./cart/HeaderComponent"
import FooterComponent from "./FooterComponent"

class CartComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }

    render(){
       
        return (
            <div className="container">
            	<HeaderComponent/>
            	<SectionComponent/>
           		<FooterComponent/>
            </div>
        )
    }

}

export default CartComponent