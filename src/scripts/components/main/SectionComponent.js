import MainHeaderComponent from "./MainHeaderComponent"
import GoodComponent from "./GoodComponent"

class SectionComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }
	
    componentWillMount(){
        
    }

    render(){
       
        return (
            <div className="section-goods">
            	<MainHeaderComponent/>
                <GoodComponent/>
            </div>
        )
    }

}

export default SectionComponent