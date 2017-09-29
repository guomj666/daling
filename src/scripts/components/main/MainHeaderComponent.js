



import HeaderSearchComponent from './HeaderSearchComponent'
import HeaderNavComponent from './HeaderNavComponent'
import HeaderBannerComponent from './HeaderBannerComponent'
import HeaderAutumnComponent from './HeaderAutumnComponent'
class MainHeaderComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }

    render(){
       
        return (
            <div className="header-box">
               <HeaderSearchComponent/>
               <HeaderNavComponent />
               <HeaderBannerComponent/>
               <HeaderAutumnComponent/>
            </div>
        )
    }

}

export default MainHeaderComponent