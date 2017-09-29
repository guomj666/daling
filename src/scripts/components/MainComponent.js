import FooterComponent from "./FooterComponent"
import MainHeaderComponent from "./main/MainHeaderComponent"
import SectionComponent from "./main/SectionComponent"
import NavInfoBoxComponent from "./main/NavInfoBoxComponent"

class MainComponent extends React.Component {

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
            	<SectionComponent />
            	<FooterComponent/>
                <NavInfoBoxComponent/>
            </div>
        )
    }

}

export default MainComponent