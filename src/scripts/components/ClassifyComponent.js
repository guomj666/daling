

import HeaderSearchComponent from "./main/HeaderSearchComponent"
import SectionComponent from "./classify/SectionComponent"
import FooterComponent from "./FooterComponent"

class ClassifyComponent extends React.Component {

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
            	<HeaderSearchComponent/>
            	<SectionComponent/>
            	<FooterComponent/>
            </div>
        )
    }

}

export default ClassifyComponent